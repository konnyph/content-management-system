select employee.id, employee.first_name, employee.last_name, role.title, department.department, role.salary
from employee Join role on employee.role_id = role.id
	JOIN department on employee.role_id = department.id;