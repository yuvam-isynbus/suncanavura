<template>
  <div>
    <h1>Welcome</h1>
    <p>Hello Oruga!</p>
  </div>
</template>

<script>
  import SuperAdminLayout from '@/Layout/SuperAdminLayout'

  export default {
    layout: (h, page) => {
        return h(
            SuperAdminLayout,
            {
                resource: 'Oruga',
                indexRoute: 'admin.users.index',
            },
            () => [page]
        )
    },
    props: {
      //
    },
  }
</script>
