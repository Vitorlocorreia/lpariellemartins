Get-ChildItem "C:\Users\Adels\.gemini\antigravity\brain\311dea80-0653-4c75-95d7-07a27e133cf1\.user_uploaded\" |
  Sort-Object LastWriteTime -Descending |
  Select-Object Name, LastWriteTime |
  Format-Table -AutoSize
