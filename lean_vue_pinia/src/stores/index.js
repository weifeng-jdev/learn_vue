import { defineStore } from 'pinia'
import { computed, ref } from 'vue';

/**
 * optionStore
 * 通过选项式api，创建store，并导出，
 * 第一个参数是你的应用中 Store 的唯一 ID，
 * 第二个参数可接受两类值：Setup 函数或 Option 对象。
 */
export const userStore = defineStore('main', {
    // 传入一个带有 state、actions 与 getters 属性的 Option 对象
    // 相当于data
    state: () => ({
        counter: 0,
    }),
    // 相当于computed
    getters: {
        /**
         * 需要定义的传入属性, 通过state操作属性支持ts的类型推导
         * 通过getters返回一个函数，可以让getters接受参数，ps:失去缓存效果
         */
        gettersConter(state) {
            return (param) => state.counter + param;
        },

        // 访问其他store的数据
        gettersConter2(state) {
            const store3 = useCounterStore()
            return state.counter + store3.gettersCount;
        }
    },
    // 相当于methods
    actions: {
        // 通过this引用这个store, 不能使用箭头函数
        addCounter() {
            this.counter++;
        }
    }
})

/**
 * setupStore
 * 通过组合式api定义， Vue 组合式 API 的 setup 函数 相似，我们可以传入一个函数，
 * 该函数定义了一些响应式属性和方法，并且返回一个带有我们想暴露出去的属性和方法的对象。
 * setup()
 */
export const useCounterStore = defineStore('counter', () => {
    // 定义响应式变量
    const count = ref(10)
    // 定义计算属性
    const gettersCount = computed(() => {
        return count
    })
    // 定义函数
    function increment() {
        count.value++
    }
    // 暴露
    return { count, increment, gettersCount }
})