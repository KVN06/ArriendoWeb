Add-Type -AssemblyName System.Drawing

$sourceDir = Join-Path $PSScriptRoot '..\public\images'
$targetDir = Join-Path $sourceDir 'fast'

if (-not (Test-Path $targetDir)) {
  New-Item -ItemType Directory -Path $targetDir | Out-Null
}

$maxWidth = 2400
$jpegEncoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
  Where-Object { $_.MimeType -eq 'image/jpeg' }

$encoderParameters = New-Object System.Drawing.Imaging.EncoderParameters(1)
$qualityParameter = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, 88L)
$encoderParameters.Param[0] = $qualityParameter

Get-ChildItem $sourceDir -File |
  Where-Object { $_.Extension -match '^\.jpe?g$' } |
  ForEach-Object {
    $sourceFile = $_
    $targetFile = Join-Path $targetDir $sourceFile.Name

    $image = [System.Drawing.Image]::FromFile($sourceFile.FullName)
    try {
      $scale = [Math]::Min(1.0, [double]$maxWidth / [double]$image.Width)
      $targetWidth = [Math]::Max(1, [int][Math]::Round($image.Width * $scale))
      $targetHeight = [Math]::Max(1, [int][Math]::Round($image.Height * $scale))

      $bitmap = New-Object System.Drawing.Bitmap($targetWidth, $targetHeight)
      $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
      try {
        $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
        $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
        $graphics.DrawImage($image, 0, 0, $targetWidth, $targetHeight)
      } finally {
        $graphics.Dispose()
      }

      $bitmap.Save($targetFile, $jpegEncoder, $encoderParameters)
      $bitmap.Dispose()
      Write-Host "Created fast image: $($sourceFile.Name) -> $targetWidth x $targetHeight"
    } finally {
      $image.Dispose()
    }
  }
