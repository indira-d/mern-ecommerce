import React from 'react'
import './WidgetSm.css'
import {Visibility} from '@material-ui/icons'

const WidgetSm = () => {
  return (
	<div className='widgetSm'>
		<span className="widgetSmTitle">New Join Members</span>
		<ul className="WidgetSmList">
			<li className="widgetSmItem">
				<img src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" alt="" className="widgetSmImage" />
				<div className="widgetSmUser">
					<span className="widgetSmUsername">Ann Keller</span>
					<span className="widgetSmUserTitle">Software engineer</span>
				</div>
				<button className="widgetSmButton">
					<Visibility className='widgetSmIcon'/>
					Display
				</button>
			</li>
			<li className="widgetSmItem">
				<img src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" alt="" className="widgetSmImage" />
				<div className="widgetSmUser">
					<span className="widgetSmUsername">Ann Keller</span>
					<span className="widgetSmUserTitle">Software engineer</span>
				</div>
				<button className="widgetSmButton">
					<Visibility className='widgetSmIcon'/>
					Display
				</button>
			</li>
			<li className="widgetSmItem">
				<img src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" alt="" className="widgetSmImage" />
				<div className="widgetSmUser">
					<span className="widgetSmUsername">Ann Keller</span>
					<span className="widgetSmUserTitle">Software engineer</span>
				</div>
				<button className="widgetSmButton">
					<Visibility className='widgetSmIcon'/>
					Display
				</button>
			</li>
			<li className="widgetSmItem">
				<img src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" alt="" className="widgetSmImage" />
				<div className="widgetSmUser">
					<span className="widgetSmUsername">Ann Keller</span>
					<span className="widgetSmUserTitle">Software engineer</span>
				</div>
				<button className="widgetSmButton">
					<Visibility className='widgetSmIcon'/>
					Display
				</button>
			</li>
			<li className="widgetSmItem">
				<img src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" alt="" className="widgetSmImage" />
				<div className="widgetSmUser">
					<span className="widgetSmUsername">Ann Keller</span>
					<span className="widgetSmUserTitle">Software engineer</span>
				</div>
				<button className="widgetSmButton">
					<Visibility className='widgetSmIcon'/>
					Display
				</button>
			</li>
		</ul>
	</div>
  )
}

export default WidgetSm