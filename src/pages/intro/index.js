import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.styl'

const cx = classNames.bind(styles)

export default class Home extends React.Component {
  render () {
    return (
      <section className={cx('main')}>
        <section className={cx('main-head')}>
          <p className={cx('greet')}>
            <span>/**</span>
            <span>* HELLO, WORLD!</span>
            <span>*/</span>
          </p>
          <h1 className={cx('name')}>yandan66</h1>
        </section>
        <section className={cx('main-skills')}>
          <p>我专注于<em>Web前端</em>&nbsp;&nbsp;<em>Node.js</em>&nbsp;&nbsp;<em>小程序</em>等开发</p>
          <p>技术栈包括不限于<em>React.js</em> &nbsp;&nbsp;<em>Vue.js</em>&nbsp;&nbsp;<em>JavaScript</em> &nbsp;&nbsp;<em>TypeScript</em>&nbsp;&nbsp; <em>H5</em> &nbsp;&nbsp;<em>CSS/CSS3</em></p>
          <p>热衷于全栈开发，对<em>Android原生应用</em>&nbsp;&nbsp;<em>React Native/Flutter等混合应用</em>有实践经验</p>
        </section>
        <section className={cx('main-worked')}>
          <p>我工作过的公司</p>
          <p className={cx('worked-company')}>
            <em><img src='//pic.c-ctrip.com/common/c_logo2013.png' alt='' /></em>
            <em><img src='//www.dota2.com.cn/public/images/logo-wanmei20180327.png' alt='' /></em>
            <em><img src='//res.hjfile.cn/pt/hj/topic/open/img/logo.png' alt='' /></em>
            <em><img src='//static.zkh360.com/image/2020-07-23/logo-new-1595513393146.png' alt='' /></em>
          </p>
        </section>
      </section>
    )
  }
}