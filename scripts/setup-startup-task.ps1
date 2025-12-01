# PowerShell script to create a Windows Task Scheduler task that auto-launches the dev server at startup
# Run this script as Administrator

$taskName = "Kingdom of Kush Dev Server"
$scriptPath = "C:\Users\hajar hassan\Desktop\front -end study and practice\git & github,javascript\design 2\scripts\startup.bat"
$taskDescription = "Auto-launch the Vite dev server for Kingdom of Kush website at system startup"

# Check if task already exists and remove it
$existingTask = Get-ScheduledTask -TaskName $taskName -ErrorAction SilentlyContinue
if ($existingTask) {
  Write-Output "Removing existing task '$taskName'..."
  Unregister-ScheduledTask -TaskName $taskName -Confirm:$false
}

# Create a new scheduled task action
$action = New-ScheduledTaskAction -Execute $scriptPath

# Create a trigger for system startup (delay 10 seconds to allow system to fully boot)
$trigger = New-ScheduledTaskTrigger -AtStartup

# Create task settings (run with highest privileges, run even if user not logged in)
$settings = New-ScheduledTaskSettingsSet -AllowStartIfOnBatteries -DontStopIfGoingOnBatteries -RunWithoutNetwork -MultipleInstances IgnoreNew

# Register the scheduled task
Register-ScheduledTask -TaskName $taskName `
  -Action $action `
  -Trigger $trigger `
  -Settings $settings `
  -Description $taskDescription `
  -RunLevel Highest `
  -ErrorAction SilentlyContinue

Write-Output "Scheduled task '$taskName' created successfully!"
Write-Output "The dev server will now auto-launch when Windows starts."
Write-Output ""
Write-Output "To disable: Open Task Scheduler, find '$taskName' in 'Task Scheduler Library', and disable it."
