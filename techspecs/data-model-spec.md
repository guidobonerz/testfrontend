# Data Model

## Generic Model
The generic model can have the following datatype by attributes:
- string
- date
- number
- boolean
- reference to other model | if needed

For every new model add the following fields. do never remove them
- id | number | primary key
- created_at | date
- created_by | userid
- changed_at | date
- changed_by | userid
- deleted | boolean
- phantom | boolean
- visible | boolean
- active | boolean


