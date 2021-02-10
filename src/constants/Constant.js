export const CheckboxLabels = ['Staged', 'Active', 'In Progress','Complete','Failed', 'Cancelled']

function createData(id, status, task, location, date, contact, description) {
    return { id, status, task, location, date, contact, description };
  }
  
export const rows = [
    createData('36308', 'Active', 'FieldOps.DC Plant/Battery Maintenance', 'CNCRNCU0X51', '2021-04-05 08:00:00', 'Ed Anglin', 'INC 4683777 Escort for clean agent inspection'),
    createData('37308', 'Complete', 'FieldOps.DC Plant/Battery Maintenance', 'CNCRNCU0X51', '2021-04-05 08:00:00', 'Ed Anglin', 'INC 4683777 Escort for clean agent inspection'),
    createData('36308', 'Active', 'GieldOps.DC Plant/Battery Maintenance', 'CNCRNCU0X51', '2021-04-05 08:00:00', 'Ed Anglin', 'INC 4683777 Escort for clean agent inspection'),
    createData('36308', 'In Progress', 'FieldOps.DC Plant/Battery Maintenance', 'CNCRNCU0X51', '2021-04-05 08:00:00', 'Anglin', 'INC 4683777 Escort for clean agent inspection'),
    createData('36308', 'Active', 'FieldOps.DC Plant/Battery Maintenance', 'CNCRNCU0X51', '2021-04-05 08:00:00', 'Ed Anglin', 'INC 4683777 Escort for clean agent inspection'),
    createData('36308', 'Active', 'FieldOps.DC Plant/Battery Maintenance', 'CNCRNCU0X51', '2021-04-05 08:00:00', 'Ed Anglin', 'INC 4683777 Escort for clean agent inspection'),,
    createData('36308', 'In Progress', 'FieldOps.DC Plant/Battery Maintenance', 'CNCRNCU0X51', '2021-04-05 08:00:00', 'Ed Anglin', 'INC 4683777 Escort for clean agent inspection'),
    createData('36308', 'Active', 'FieldOps.DC Plant/Battery Maintenance', 'CNCRNCU0X51', '2021-04-05 08:00:00', 'Ed Anglin', 'INC 4683777 Escort for clean agent inspection'),
    createData('36308', 'Complete', 'FieldOps.DC Plant/Battery Maintenance', 'CNCRNCU0X51', '2021-04-05 08:00:00', 'Ed Anglin', 'INC 4683777 Escort for clean agent inspection'),
    createData('36308', 'Active', 'FieldOps.DC Plant/Battery Maintenance', 'CNCRNCU0X51', '2021-04-05 08:00:00', 'Ed Anglin', 'INC 4683777 Escort for clean agent inspection'),
    createData('36308', 'Failed', 'FieldOps.DC Plant/Battery Maintenance', 'CNCRNCU0X51', '2021-04-05 08:00:00', 'Ed Anglin', 'INC 4683777 Escort for clean agent inspection'),,
    createData('36308', 'In Progress', 'FieldOps.DC Plant/Battery Maintenance', 'CNCRNCU0X51', '2021-04-05 08:00:00', 'Ed Anglin', 'INC 4683777 Escort for clean agent inspection'),
    createData('36308', 'Active', 'FieldOps.DC Plant/Battery Maintenance', 'CNCRNCU0X51', '2021-04-05 08:00:00', 'Ed Anglin', 'INC 4683777 Escort for clean agent inspection'),
  ];