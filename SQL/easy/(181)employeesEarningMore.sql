# Write your MySQL query statement below

select

t1.name as Employee

from Employee as t1

inner join Employee as t2

on t1.managerId = t2.id

where t1.salary > t2.salary;