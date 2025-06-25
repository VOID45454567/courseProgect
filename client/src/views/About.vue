<template>
    <div class="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-100 font-sans">
        <section class="py-16 md:py-24 px-6 text-center">
            <h1
                class="text-4xl md:text-5xl font-extrabold text-[#4a3aff] mb-4 tracking-tight bg-gradient-to-r from-[#4a3aff] to-purple-500 bg-clip-text text-transparent">
                О компании
            </h1>
            <p class="max-w-2xl mx-auto text-lg md:text-xl text-gray-700 leading-relaxed">
                Мы помогаем компаниям находить талантливых специалистов, а профессионалам — строить карьеру мечты.
            </p>
        </section>

        <section class="px-6 py-12 md:py-16 bg-white rounded-t-3xl shadow-inner">
            <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div class="order-2 md:order-1">
                    <h2 class="text-2xl font-bold text-gray-800 mb-4">Наша миссия</h2>
                    <p class="text-gray-600 leading-relaxed mb-4">
                        Мы стремимся создать платформу, которая объединяет работодателей и соискателей, делая процесс
                        найма максимально простым, быстрым и качественным.
                    </p>
                    <p class="text-gray-600 leading-relaxed">
                        С момента основания мы помогли тысячам компаний найти подходящих сотрудников, а сотням
                        специалистов — начать новую главу в своей карьере.
                    </p>
                </div>
                <div class="order-1 md:order-2 flex justify-center group">

                </div>
            </div>
        </section>

        <section class="bg-gradient-to-r from-[#4a3aff] to-purple-600 py-16 px-6 text-white relative overflow-hidden">
            <div class="absolute inset-0 opacity-10 pointer-events-none"
                style="background-image: repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 1px, transparent 6px);">
            </div>
            <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center z-10 relative">
                <div v-for="(stat, index) in stats" :key="index" class="flex flex-col items-center">
                    <span class="text-4xl md:text-5xl font-bold mb-2">{{ stat.value }}</span>
                    <h3 class="text-lg md:text-xl font-semibold mb-1">{{ stat.title }}</h3>
                    <p class="text-sm opacity-90">{{ stat.description }}</p>
                </div>
            </div>
        </section>

        <!-- Clients Section -->
        <section class="py-16 px-6 bg-gray-50">
            <div class="max-w-5xl mx-auto text-center">
                <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-10">Наши клиенты</h2>
                <div
                    class="flex flex-wrap justify-center gap-8 items-center opacity-80 hover:opacity-100 transition duration-300">
                    <div v-for="(client, index) in clients" :key="index"
                        class="w-24 h-16 flex items-center justify-center">
                        <span class="font-semibold text-lg text-gray-600">{{ client.name }}</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- Values Section -->
        <section class="py-16 px-6 bg-white">
            <div class="max-w-5xl mx-auto">
                <h2 class="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-12">Наши ценности</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div v-for="(value, index) in values" :key="index"
                        class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl border-l-4 border-[#4a3aff] transform hover:-translate-y-1 transition duration-300">
                        <div class="w-12 h-12 mb-4 rounded-full bg-indigo-100 flex items-center justify-center">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                class="w-6 h-6 text-[#4a3aff]">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                            </svg>
                        </div>
                        <h3 class="text-lg font-semibold text-gray-800 mb-2">{{ value.title }}</h3>
                        <p class="text-gray-600">{{ value.description }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- How We Work Section -->
        <section class="py-16 px-6 bg-gray-50">
            <div class="max-w-5xl mx-auto text-center">
                <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-12">Как мы работаем</h2>
                <div class="space-y-10">
                    <div v-for="(step, index) in steps" :key="index"
                        class="flex flex-col md:flex-row items-start md:items-center gap-6 bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition duration-300">
                        <div
                            class="flex-shrink-0 w-12 h-12 rounded-full bg-[#4a3aff] text-white flex items-center justify-center font-bold text-xl">
                            {{ step.step }}
                        </div>
                        <div class="text-left">
                            <h3 class="font-semibold text-lg text-gray-800">{{ step.title }}</h3>
                            <p class="text-gray-600 mt-2">{{ step.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Testimonials Section -->
        <section class="py-16 px-6 bg-white">
            <div class="max-w-5xl mx-auto text-center">
                <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-12">Что говорят клиенты</h2>
                <div class="space-y-6">
                    <div v-for="(testimonial, index) in testimonials" :key="index"
                        class="bg-gray-50 p-6 rounded-xl shadow-md border-l-4 border-[#4a3aff]">
                        <p class="text-gray-700 italic mb-4">“{{ testimonial.text }}”</p>
                        <p class="text-right font-semibold text-gray-800">— {{ testimonial.author }}</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-[#4a3aff] text-white py-12 px-6 text-center relative overflow-hidden">
            <div class="absolute inset-0 bg-grid-white/[0.05]"></div>
            <div class="relative z-10">
                <h2 class="text-2xl md:text-3xl font-bold mb-4">Готовы начать?</h2>
                <p class="mb-6 max-w-xl mx-auto text-sm md:text-base opacity-90">
                    Свяжитесь с нами сегодня и узнайте, как мы можем помочь вашему бизнесу расти через правильный подбор
                    персонала.
                </p>
                <button
                    class="bg-white text-[#4a3aff] font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 hover:shadow-lg cursor-pointer transition duration-300 custom-cursor">
                    Связаться с нами
                </button>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            stats: [
                { value: '10+', title: 'Лет на рынке', description: 'Огромный опыт в сфере подбора персонала' },
                { value: '5000+', title: 'Успешных наймов', description: 'Реальный вклад в развитие бизнеса клиентов' },
                { value: '98%', title: 'Удовлетворенность', description: 'Высокий уровень доверия от клиентов и кандидатов' }
            ],
            clients: [
                { name: 'TechCorp' },
                { name: 'GreenEnergy' },
                { name: 'FinSoft' },
                { name: 'DataPro' },
                { name: 'NovaDesign' },
                { name: 'CloudOps' }
            ],
            values: [
                {
                    title: 'Профессионализм',
                    description: 'Мы всегда придерживаемся высоких стандартов в работе, используя современные методики рекрутинга.'
                },
                {
                    title: 'Честность',
                    description: 'Прозрачность и этичность — основа всех наших взаимодействий с клиентами и кандидатами.'
                },
                {
                    title: 'Инновации',
                    description: 'Мы внедряем новые технологии для повышения эффективности подбора персонала и улучшения пользовательского опыта.'
                }
            ],
            steps: [
                {
                    step: 1,
                    title: 'Анализ потребностей',
                    description: 'Мы изучаем ваши цели, культуру компании и требования к кандидату.'
                },
                {
                    step: 2,
                    title: 'Поиск талантов',
                    description: 'Используем базы данных, соцсети и нашу экспертную сеть для поиска подходящих специалистов.'
                },
                {
                    step: 3,
                    title: 'Предварительный отбор',
                    description: 'Проводим интервью, тестирование и проверку навыков кандидатов.'
                },
                {
                    step: 4,
                    title: 'Финальное собеседование',
                    description: 'Подготавливаем кандидатов к встрече с вами и обеспечиваем обратную связь.'
                }
            ],
            testimonials: [
                {
                    text: 'Отличная команда! Быстро и профессионально нашли нам ключевого разработчика.',
                    author: 'Алексей К., CEO TechHub'
                },
                {
                    text: 'Процесс был прозрачен и понятен на каждом этапе. Очень довольны результатом.',
                    author: 'Екатерина М., HR-директор NovaSoft'
                },
                {
                    text: 'Высокий уровень сервиса и внимательное отношение к деталям.',
                    author: 'Дмитрий Р., COO DataWorks'
                }
            ]
        };
    },
    mounted() {
        const image = this.$refs.parallaxImage;
        window.addEventListener('mousemove', (e) => {
            if (!image) return;
            const x = e.clientX / window.innerWidth - 0.5;
            const y = e.clientY / window.innerHeight - 0.5;
            image.style.transform = `translate(${x * 10}px, ${y * 10}px) scale(1.05)`;
        });
    }
};
</script>

<style>
.custom-cursor {
    cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'><circle cx='20' cy='20' r='10' fill='%234a3aff'/></svg>") 20 20, auto;
}

.bg-grid-white {
    background-image: linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
    background-size: 20px 20px;
}
</style>