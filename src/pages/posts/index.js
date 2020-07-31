import React from 'react'
import classNames from 'classnames/bind'
import Post from './post'
import Pagination from './pagination'
import styles from './styles.styl'

const cx = classNames.bind(styles)

export default class Articles extends React.Component {
  render() {
    return (
      <main className={cx('main')}>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Pagination></Pagination>
      </main>
    )
  }
}