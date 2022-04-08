const department = () => import('@/views/main/system/department/DepartmentManage.vue')
export default {
  path: '/main/system/department',
  name: 'department',
  component: department,
  children: []
}
