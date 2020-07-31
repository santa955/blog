import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.styl'

const cx = classNames.bind(styles)

export default class Article extends React.PureComponent {
  render () {
    return (
      <article className={cx('main')}>
        <header>
          <h1>截图的诱惑：Docker部署Puppeteer项目</h1>
          <p className={cx('meta')}>
            <span>发布于：2018年10月09日</span>
            <span className={cx('tags')}>
              <a href='#'>#Docker</a>
              <a href='#'>#Puppeteer</a>
              <a href='#'>#Linux</a>
            </span>
          </p>
        </header>
        <section>
          <h2 class={cx('header')}>一、<code>Puppeteer</code>介绍及安装</h2>
          <p>The format of DEV's first official podcast, <a href="https://dev.to/devdiscuss">DevDiscuss</a>, begins with an interview and ends with commentary from the community.</p>
        </section>
      </article>
    )
  }
}