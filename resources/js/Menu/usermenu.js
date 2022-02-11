export default [
  {
    url: 'user/dashboard',
    label: 'Početna',
    iconName: 'home',
    routeName: route('user.dashboard'),
  },
  {
    url: 'user/profile/form',
    label: 'Profil',
    iconName: 'user-circle',
    // routeName: route('admin.users.index', { remember: 'forget' }),
    routeName: route('user.profile.data'),
  },
  {
    url: 'user/worktravel/form',
    label: 'Work & travel',
    hasApplication: 0,
    iconName: 'cash',
    routeName: route('user.worktravel.form'),
  },
  {
    url: 'user/worktravel/application',
    label: 'Work & travel',
    hasApplication: 1,
    iconName: 'cash',
    routeName: route('user.worktravel.application'),
  },
  {
    url: 'user/aupair/form',
    label: 'Au pair',
    hasAupair: 0,
    iconName: 'globe-alt',
    routeName: route('user.aupair.form'),
  },
  {
    url: 'user/aupair/application',
    label: 'Au pair',
    hasAupair: 1,
    iconName: 'globe-alt',
    routeName: route('user.aupair.application'),
  },
  {
    url: 'user/paycross',
    label: 'Plaćanje',
    iconName: 'credit-card',
    routeName: route('user.paycross'),
  },
  {
    url: 'user/worktravels',
    label: 'W&T poslovi',
    iconName: 'briefcase',
    routeName: route('user.worktravels'),
  },
  {
    url: 'user/conversation',
    label: 'Poruke',
    iconName: 'inbox',
    routeName: route('user.conversation'),
    unreadMessages: true
  },
]
