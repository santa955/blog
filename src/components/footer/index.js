import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.styl'

const cx = classNames.bind(styles)

export default class Footer extends React.PureComponent {
  render () {
    return (
      <footer className={cx('footer')}>
        <section className={cx('footer-inner')}>
          <div><b>©2019-2020</b><p>yandan66</p></div>
          <div><b>联系方式</b><p><a href='mailto:yandan66@126.com'>yandan66@126.com</a></p></div>
          <div>
            <b>社交</b>
            <p className={cx('social')}>
              <a href='https://github.com/lannonbr'>微信</a>
              <a href='https://twitter.com/lannonbr'>QQ</a>
            </p>
          </div>
          <div><b>GitHub</b><p><a href='https://github.com/yandan66'>https://github.com/yandan66</a></p></div>
        </section>
      </footer>
    )
  }
}