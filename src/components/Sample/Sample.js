import React from 'react'
import styles from './Sample.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const Sample = () => {
  return (
    <div className={cx('sample')}>Sample</div>
  )
}

export default Sample