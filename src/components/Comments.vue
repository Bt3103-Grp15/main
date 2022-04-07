<template>
  <div class="commit">
    <div class="user-info">
      <div class="arrt">
        <svg-icon class="svg-icon" iconClass="touxiang"></svg-icon>
      </div>
      <div class="user-commit-info">
        {{ comments.content.substring(0, 100) + "..." }}
      </div>
    </div>
    <div class="username">
      <h3>{{ comments.username }}</h3>
    </div>
    <div class="bottom-jantou">
      <div class="commit-time">
        {{ comments.date.toDate() }}
      </div>
      <div class="input-jiantou">
        <svg-icon class="jiantou" iconClass="jiantou"></svg-icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "comments",
  props: ["comments"],
};
</script>

<style lang="less" scoped>
.commit {
  height: 244px;
  width: 820px;
  background: rgba(255, 255, 255, 0.5);
  padding: 20px 20px;
  margin-bottom: 20px;
  .user-info {
    display: flex;
    align-items: center;
    .arrt {
      height: 100px;
      width: 100px;
      border-radius: 50%;
      background: #c9c9c9;
      margin-right: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      .svg-icon {
        // color: #c9c9c9;
      }
    }
    .user-commit-info {
      font-size: 23px;
      font-weight: 700;
      padding-right: 30px;
      letter-spacing: normal !important;
    }
  }
  .username {
    display: flex;
    padding: 10px;
    margin-left: 10px;
  }
  .bottom-jantou {
    display: flex;
    // padding-bottom: 20px;
    .commit-time {
      padding-bottom: 20px;
      padding-right: 20px;
      width: 30%;
    }
    .input-jiantou {
      height: 55px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid rgb(66, 66, 66);
      width: 60%;
      border-right: 30px;
      position: relative;
      .jiantou {
        height: 54px;
        width: 54px;
        position: absolute;
        cursor: pointer;
        // bottom: px;
        &:hover {
          transform: translateX(10px);
          transition: 0.5s;
        }
      }
    }
  }
}
</style>