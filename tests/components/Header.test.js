import { shallowMount } from '@vue/test-utils'
import router from '~/routes'
import store from '~/store'
import Header from '~/components/Header'

describe('components/Header.vue', ()=>{
  let wrapper
  beforeEach(()=>{
    wrapper = shallowMount(Header, {
      global: {
        plugins: {
          router,
          store
        }
      }
    })
  })

  // test('경로 정규표현식이 없는 경우 일치하지 않습니다', ()=>{
    
  //   const regExp = undefined
  //   expect(wrapper.vm.isMatch(regExp)).toBe(123)
  // })
})