<template>
    <tbody class="bg-white divide-y divide-gray-200">
        <tr>
            <td class="w-24 px-6 py-4 text-sm text-gray-500 truncate">#{{ user.id }}</td>
            <td class="w-64 px-6 py-4 truncate">
                <div class="flex items-center">
                    <div
                        class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-bold">
                        {{ user.name.charAt(0).toUpperCase() }}
                    </div>
                    <div class="ml-4 truncate">
                        <div class="text-sm font-medium text-gray-900 truncate">{{ user.name }}</div>
                    </div>
                </div>
            </td>
            <td class="w-96 px-6 py-4 text-sm text-gray-500 truncate">{{ user.email }}</td>
            <td class="w-48 px-6 py-4 truncate">
                <span :class="['px-2 inline-flex text-xs leading-5 font-semibold rounded-full truncate',
                    user.role === 'Admin' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800']">
                    {{ user.role }}
                </span>
            </td>
            <td class="w-48 px-6 py-4 text-sm font-medium">
                <button class="text-red-600 hover:text-red-900" @click="deleteUser">Удалить</button>
            </td>
        </tr>
    </tbody>
</template>

<script>
import store from '@/store';

export default {
    props: {
        user: Object,
        onUserDeleted: Function
    },
    methods: {
        async deleteUser() {
            await store.dispatch('user/deleteUser', this.user.id)

            this.onUserDeleted()
        }
    }
}
</script>

<style scoped>
.table-fixed {
    table-layout: fixed;
}

.truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>