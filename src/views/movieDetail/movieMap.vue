<template>
  <div class="movie-map">
      <div id="container"></div>
      <div id="panel"></div>
  </div>
</template>

<script>
import AMap from 'AMap'
import AMapUI from 'AMapUI'
export default {
  data () {
    return {
      location: [],
      map: {},
      name: '',
      show: ''
    }
  },
  props: {
    movieName: {
      type: String,
      default: ''
    },
    movieShow: {
      type: String,
      default: ''
    }
  },
  components: {
    AMap,
    AMapUI
  },
  mounted () {
    this.createMap()
    // this.init().then((res) => {
    //   this.search(res)
    // })
  },
  methods: {
    createMap () {
      let map = new AMap.Map('container', {
        zoom: 14
      })
      this.map = map
    },
    init () {
      return new Promise((resolve, reject) => {
        let that = this
        this.map.plugin('AMap.Geolocation', function () {
          let geolocation = new AMap.Geolocation({
            enableHighAccuracy: true, // 是否使用高精度定位，默认:true
            timeout: 10000, // 超过10秒后停止定位，默认：无穷大
            buttonOffset: new AMap.Pixel(10, 20), // 定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
            zoomToAccuracy: true, // 定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
            buttonPosition: 'RB'
          })
          that.map.addControl(geolocation)
          geolocation.getCurrentPosition()

          AMap.event.addListener(geolocation, 'complete', (result) => {
            that.map.setCenter(result.position)
            that.location = [result.position.lng, result.position.lat]
            resolve(that.map)
            // resolve(that.location)
          })// 返回定位信息
          AMap.event.addListener(geolocation, 'error', (result) => {
          }) // 返回定位出错信息
        })
        // this.map = map
      })
    },
    search (res) {
      let cpoint = this.location // 中心点坐标
      let that = this
      AMap.service(['AMap.PlaceSearch'], function () {
        let placeSearch = new AMap.PlaceSearch({ // 构造地点查询类
          pageSize: 10,
          pageIndex: 1,
          city: '杭州', // 城市
          citylimit: true, // 强制限制在设置的城市内搜索
          type: '电影院',
          map: res,
          panel: 'panel',
          showCover: true, // 是否显示搜索范围
          autoFitView: true// 自动调整搜索结果范围可视
        })
        // 关键字查询
        // placeSearch.search('电影院')
        // 查找周边
        let _date = that.show.replace(/-+/g, '')
        let _name = ''
        if (_date < 20180820) {
          _name = '搜不出来的'
        }
        placeSearch.searchNearBy(_name, cpoint, 5000, function (status, result) {

        })
      })
    }
  },
  watch: {
    movieName(val) {
      console.log(val)
      this.name = val
      this.init().then((res) => {
      this.search(res)
    })
    },
    movieShow(val) {
      this.show = val
    }
  }
}
</script>
<style lang="less" scoped>
.movie-map {
  // display: flex
  #container {
        width:100%;
        height: 300px;
    }
    #panel{
        // position: absolute;
        // background-color: white;
        // max-height: 90%;
        // overflow-y: auto;
        // top: 50px;
        // right: 10px;
        // width: 280px;
    }
}

</style>
