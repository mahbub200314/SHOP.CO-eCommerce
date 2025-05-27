import './brand.css'

import calvin from '../../assets/brand/calvin.png'
import gucci from '../../assets/brand/gucci-logo-1.png'
import prada from '../../assets/brand/prada-logo-1.png'
import zara from '../../assets/brand/zara-logo-1.png'
import group from '../../assets/brand/Group.png'

const Brand = () => {
  return (
    <div className="brand min-h-[120px] p-5 bg-black w-full flex items-center justify-around flex-wrap gap-5">
      <img src={group} alt="group-img" />
      <img src={gucci} alt="" />
      <img src={zara} alt="" />
      <img src={prada} alt="" />
      <img src={calvin} alt="" />
    </div>
  )
}

export default Brand
