import Component from 'vue-class-component'
import{ BaseView } from '../base.view'
import './style.scss'
import { LoadingIndicator } from '../../components/loading-indicator/index'

@Component({
  template: require('./template.html'),
  components:{LoadingIndicator},
  data: () => ({
    isLoading: Boolean
  })
})

export default class CinemasDetailView extends BaseView {

  created () {
     this.headerConfig  = {title: '我的'}
     this.isLoading = true
     setTimeout(() => {
       this.isLoading = false
     }, 1000 * 0.8)
  }
}