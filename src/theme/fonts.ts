import Metrics from './metrics'

const size = {
  font6: Metrics.screenWidht * (6 / 365),
  font8: Metrics.screenWidht * (8 / 365),
  font10: Metrics.screenWidht * (10 / 365),
  font12: Metrics.screenWidht * (12 / 365),
  font14: Metrics.screenWidht * (14 / 365),
  font16: Metrics.screenWidht * (16 / 365),
  font18: Metrics.screenWidht * (18 / 365),
  font20: Metrics.screenWidht * (20 / 365),
}

const weight: any = {
  full: '900',
  semi: '600',
  low: '400',
  bold: 'bold',
  normal: 'normal',
}

const type = {
  Kanit: 'Kanit',
  Neonderthaw: 'Neonderthaw',
}

export default {
  size,
  weight,
  type,
}
