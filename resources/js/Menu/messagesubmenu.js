export default [
  {
    url: 'messages/received_messages',
    label: 'Primljene',
    iconName: 'home',
    routeName: route('messages.received_messages.index'),
  },
  {
    url: 'messages/sent_messages',
    label: 'Poslane',
    iconName: 'users',
    // routeName: route('admin.users.index', { remember: 'forget' }),
    routeName: route('messages.sent_messages.index')
  },
  {
    url: 'messages/mass_messages',
    label: 'Grupne poruke',
    iconName: 'users',
    // routeName: route('admin.users.index', { remember: 'forget' }),
    routeName: route('messages.mass_messages.index')
  },
]
