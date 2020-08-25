<template>
  <div class="app">
    <image class="background" :src="'./images/bg' + (playIndex % 3) + '.png'" resize="stretch"></image>

    <div class="top">
      <text class="top-title">{{ playIndex > -1 ? playLists[playIndex].title : '' }}</text>
      <text class="top-subtitle">{{ playIndex > -1 ? playLists[playIndex].author : '' }}</text>
    </div>
    <div class="middle">
      <slider class="middle-slider" @change="changeHandler" :auto-play="false" :infinite="false">
        <div class="middle-slider-item">
          <div class="middle-slider-image">
            <image ref="photo" class="middle-slider-image-photo" :src="playIndex > -1 ? playLists[playIndex].image : ''" resize="cover"></image>
          </div>
          <div class="middle-onelyrics">
            <text class="middle-onelyrics-text">{{ playIndex > -1 ? lyricLists[lyricIndex].text : '' }}</text>
          </div>
        </div>
        <div class="middle-slider-lyrics">
          <scroller ref="myLyrics" class="middle-lyrics-main" @touchstart="lyricLock = true" @touchend="lyricLock = false">
            <div class="middle-lyrics-item" v-for="(item, index) in lyricLists" :ref="'lyric_' + index">
              <text :class="[index === lyricIndex ? 'middle-lyrics-active' : 'middle-lyrics-text']">{{ item.text }}</text>
            </div>
          </scroller>
        </div>
      </slider>
      <div class="middle-dot">
        <div :class="[currentIndex === 0 ? 'middle-dot-active' : 'middle-dot-item']"></div>
        <div :class="[currentIndex === 1 ? 'middle-dot-active' : 'middle-dot-item']"></div>
      </div>
    </div>

    <div class="bottom">
      <div class="bottom-time">
        <text class="bottom-time-val">{{ secondToDate(playInfo.current / 1000) }}</text>
        <div class="bottom-time-progress">
          <slider-bar :length="400" :indicator="true" :value="Math.min(100, (playInfo.percent || 0) * 100)" validColor="#ffcd32" indicatorColor="#ffcd32" :indicatorHeight="38" @updateEnd="updateEnd"></slider-bar>
        </div>
        <text class="bottom-time-val">{{ secondToDate(playInfo.duration / 1000) }}</text>
      </div>
      <div class="bottom-item">
        <image v-if="playMode === 'list'" @click="playMode = 'one'" class="bottom-item-image" src="./images/cycle-list.png"></image>
        <image v-else @click="playMode = 'list'" class="bottom-item-image" src="./images/cycle-one.png"></image>

        <image class="bottom-item-image" @click="prevPlay" src="./images/prev.png"></image>

        <image v-if="playState === 'play'" @click="onpause" class="bottom-item-image-center" src="./images/pause.png"></image>
        <image v-else class="bottom-item-image-center" @click="onplay" src="./images/play.png"></image>

        <image class="bottom-item-image" @click="nextPlay" src="./images/next.png"></image>

        <image v-if="!playLove" class="bottom-item-image" @click="playLove = true" src="./images/love-not.png"></image>
        <image v-else class="bottom-item-image" @click="playLove = false" src="./images/love.png"></image>
      </div>
    </div>
  </div>
</template>

<style scoped>
.app {
  flex: 1;
  background-color: #464646;
}
.background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.top {
  margin-bottom: 25px;
  align-items: center;
  justify-content: center;
}
.top-title {
  margin: 12px auto 0;
  height: 80px;
  line-height: 80px;
  text-align: center;
  font-size: 36px;
  color: #fff;
}
.top-subtitle {
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 28px;
  color: #fff;
}
.middle {
  flex: 1;
  justify-content: center;
  align-items: center;
  position: relative;
}
.middle-slider {
  flex: 1;
  width: 750px;
}
.middle-slider-item {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
}
.middle-slider-image {
  width: 500px;
  height: 500px;
  border-radius: 250px;
  background-color: rgba(255, 255, 255, 0.1);
  align-items: center;
  justify-content: center;
}
.middle-slider-image-photo {
  width: 468px;
  height: 468px;
  border-radius: 234px;
}
.middle-slider-lyrics {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  padding-top: 58px;
  padding-bottom: 78px;
}
.middle-lyrics-main {
  flex: 1;
  width: 750px;
}
.middle-lyrics-item {
  height: 64px;
  align-items: center;
  justify-content: center;
}
.middle-lyrics-text {
  font-size: 30px;
  color: rgba(255, 255, 255, 0.5);
}
.middle-lyrics-active {
  font-size: 32px;
  color: #ffffff;
}
.middle-onelyrics {
  height: 88px;
  margin: 12px 0;
  justify-content: center;
  align-items: center;
}
.middle-onelyrics-text {
  font-size: 28px;
  color: rgba(255, 255, 255, 0.5);
}
.middle-dot {
  position: absolute;
  left: 0;
  bottom: 32px;
  right: 0;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.middle-dot-item {
  margin: 0 6px;
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background-color: rgba(255, 255, 255, 0.5);
}
.middle-dot-active {
  margin: 0 6px;
  width: 30px;
  height: 14px;
  border-radius: 7px;
  background-color: rgba(255, 255, 255, 0.8);
}
.bottom-time {
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.bottom-time-val {
  width: 100px;
  text-align: center;
  color: #ffffff;
  font-size: 26px;
}
.bottom-time-progress {
  width: 450px;
  align-items: center;
  justify-content: center;
}
.bottom-item {
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 36px 0 64px;
}
.bottom-item-image {
  width: 76px;
  height: 76px;
  margin: 0 24px;
}
.bottom-item-image-center {
  width: 98px;
  height: 98px;
  margin: 0 24px;
}
</style>

<script>
const dom = app.requireModule('dom');
const audio = app.requireModule('audio');
const animation = app.requireModule('animation');

import SliderBar from '../components/SliderBar/index';

export default {
  components: { SliderBar },
  data() {
    return {
      photoDegree: 0,
      currentIndex: 0,

      playMode: 'list',
      playState: 'play',
      playLove: false,
      playLists: [],
      playIndex: -1,
      playInfo: {},

      lyricHeight: 0,
      lyricIndex: 0,
      lyricLock: false,
      lyricLists: [],
    };
  },

  mounted() {
    if (typeof audio === 'undefined') {
      eeui.alert({
        title: '温馨提示',
        message: '检测到未安装audio插件，安装详细请登录https://eeui.app/',
      });
    }
    typeof audio !== 'undefined' &&
      audio.setCallback((res) => {
        this.playInfo = res;
      });
    //
    eeui.ajax(
      {
        url: eeui.rewriteUrl('./json/data.json'),
      },
      (result) => {
        if (result.status === 'success') {
          let res = result.result;
          if (res.ret === 1) {
            this.playLists = res.data;
            this.playIndex = 0;
            //
            setTimeout(() => {
              this.rotate();
              dom.getComponentRect(this.$refs.myLyrics, (option) => {
                this.lyricHeight = option.size.height;
              });
            }, 300);
          } else {
            eeui.alert({
              title: '温馨提示',
              message: '数据加载失败！',
            });
          }
        }
      }
    );
  },

  watch: {
    playIndex(val) {
      this.lyricIndex = 0;
      this.lyricLists = this.playLists[val].lyric;
      typeof audio !== 'undefined' && audio.play(this.playLists[val].url);
    },

    playInfo(val) {
      if (val.status === 'compelete') {
        if (this.playMode === 'list') {
          this.nextPlay();
        } else {
          typeof audio !== 'undefined' && audio.play(this.playLists[this.playIndex].url);
        }
      }
      //
      let current = val.current / 1000,
        i = 0;
      this.lyricLists.some((item) => {
        if (current <= this.dateToSecond(item.time)) {
          return true;
        }
        i++;
      });
      this.lyricIndex = Math.max(0, i - 1);
      if (this.lyricLock) {
        return;
      }
      const el = this.$refs['lyric_' + this.lyricIndex][0];
      dom.scrollToElement(el, { offset: this.lyricHeight / -2, animation: this.lyricIndex !== 0 });
    },
  },

  methods: {
    rotate() {
      this.photoDegree += 720;
      animation.transition(
        this.$refs.photo,
        {
          styles: {
            transform: 'rotate(' + this.photoDegree + 'deg)',
            transformOrigin: 'center center',
          },
          duration: 24000,
          timingFunction: 'linear',
        },
        () => {
          this.rotate();
        }
      );
    },

    changeHandler(e) {
      this.currentIndex = e.index;
    },

    secondToDate(result) {
      if (typeof result === 'undefined' || isNaN(result)) {
        return '00:00';
      }
      let h = Math.floor(result / 3600) < 10 ? '0' + Math.floor(result / 3600) : Math.floor(result / 3600);
      let m = Math.floor((result / 60) % 60) < 10 ? '0' + Math.floor((result / 60) % 60) : Math.floor((result / 60) % 60);
      let s = Math.floor(result % 60) < 10 ? '0' + Math.floor(result % 60) : Math.floor(result % 60);
      return h > 0 ? h + ':' + m + ':' + s : m + ':' + s;
    },

    dateToSecond(result) {
      let array = (result + '').split(':');
      let second = 0;
      if (array.length > 2) {
        second += parseFloat(array[0]) * 60 * 60;
        second += parseFloat(array[1]) * 60;
        second += parseFloat(array[2]);
      } else {
        second += parseFloat(array[0]) * 60;
        second += parseFloat(array[1]);
      }
      return second;
    },

    prevPlay() {
      if (this.playLists.length === 0) {
        eeui.toast('播放列表为空！');
        return;
      }
      if (this.playLists.length === 1) {
        //只有一首歌重头开始
        typeof audio !== 'undefined' && audio.seek(0);
        return;
      }
      if (this.playIndex === 0) {
        //第一首时切换到最后一首
        this.playIndex = this.playLists.length - 1;
        return;
      }
      this.playIndex--;
    },

    nextPlay() {
      if (this.playLists.length === 0) {
        eeui.toast('播放列表为空！');
        return;
      }
      if (this.playLists.length === 1) {
        //只有一首歌重头开始
        typeof audio !== 'undefined' && audio.seek(0);
        return;
      }
      if (this.playIndex === this.playLists.length - 1) {
        //播放最后一首时切换到第一首
        this.playIndex = 0;
        return;
      }
      this.playIndex++;
    },

    onpause() {
      typeof audio !== 'undefined' && audio.pause();
      this.playState = 'pause';
    },

    onplay() {
      typeof audio !== 'undefined' && audio.play(this.playLists[this.playIndex].url);
      this.playState = 'play';
    },

    updateEnd(progress) {
      typeof audio !== 'undefined' && audio.seek((this.playInfo.duration * Math.min(99, progress)) / 100);
    },
  },
};
</script>
