const role = () => import('@/views/main/system/role/RoleManage.vue')
export default {
  path: '/main/system/role',
  name: 'role',
  component: role,
  children: []
}
