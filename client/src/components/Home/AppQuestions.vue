<template>
    <div class="bg-gradient-to-b from-white to-gray-50 py-16 px-6">

        <section class="max-w-3xl mx-auto">
            <h2 class="text-3xl font-bold text-center text-primary-500 mb-4">Часто задаваемые вопросы</h2>
            <p class="text-center text-gray-600 mb-10">
                Ниже вы найдете ответы на самые распространенные вопросы о нашем сервисе.
            </p>

            <div class="space-y-4">
                <div v-for="(faq, index) in faqs" :key="index"
                    class="bg-white p-5 rounded-xl shadow-sm border-l-4 border-[#4a3aff] cursor-pointer transition-all duration-300"
                    :class="{ 'shadow-md': openIndex === index }" @click="toggleFAQ(index)">
                    <div class="flex justify-between items-center">
                        <h3 class="font-medium text-gray-800">{{ faq.question }}</h3>
                        <svg class="w-5 h-5 text-[#4a3aff] transform transition-transform duration-300"
                            :class="{ 'rotate-180': openIndex === index }" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7">
                            </path>
                        </svg>
                    </div>
                    <div class="overflow-hidden transition-all duration-300" :class="{
                        'max-h-40 opacity-100 mt-3': openIndex === index,
                        'max-h-0 opacity-0': openIndex !== index
                    }">
                        <p class="text-gray-600">{{ faq.answer }}</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            openIndex: null,

            faqs: [
                {
                    question: "Сколько стоит услуга?",
                    answer: "Стоимость зависит от сложности вакансии и сроков. Мы предлагаем как разовые услуги, так и абонементы."
                },
                {
                    question: "Как быстро вы находите сотрудников?",
                    answer: "Обычно мы находим подходящих кандидатов за 5–10 дней. Точные сроки зависят от специфики должности."
                },
                {
                    question: "Как происходит оплата?",
                    answer: "Оплата возможна по факту закрытия вакансии или в рассрочку. Подробнее об условиях вы можете узнать у менеджера."
                },
                {
                    question: "Какие гарантии вы предоставляете?",
                    answer: "Мы даем гарантию до 3 месяцев на успешное трудоустройство. Если кандидат не подходит, мы бесплатно ищем замену."
                }
            ]
        };
    },
    methods: {
        toggleFAQ(index) {
            this.openIndex = this.openIndex === index ? null : index;
        }
    }
};
</script>

<style scoped>
.rotate-180 {
    transform: rotate(180deg);
}
</style>