'use client'
import { useState } from "react"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"

const images = [
	{
		id: 1,
		url: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
		title: 'Būvmateriālu piegāde',
		description: 'Manipulatora pakalpojums būvmateriālu piegādei',
	},
	{
		id: 2,
		url: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
		title: 'Kravu iekraušana',
		description: 'Profesionāla kravu iekraušana un izkraušana',
	},
	{
		id: 3,
		url: 'https://images.unsplash.com/photo-1586528116493-a029325540fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
		title: 'Transporta pakalpojumi',
		description: 'Dažādi transporta pakalpojumi Vidzemē',
	},
	{
		id: 4,
		url: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
		title: 'Iekārtu pārvietošana',
		description: 'Smagu iekārtu pārvietošana ar manipulatoru',
	},
	{
		id: 5,
		url: 'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
		title: 'Būvlaukuma piegādes',
		description: 'Materiālu piegāde būvlaukumos',
	},
	{
		id: 6,
		url: 'https://images.unsplash.com/photo-1617503752587-97d2103a96ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
		title: 'Kravas transports',
		description: 'Kravas transporta pakalpojumi',
	}
]

export default function Gallery() {
	const [open, setOpen] = useState(false)
	const [currentIndex, setCurrentIndex] = useState(0)

	const handleClick = (index) => {
		setCurrentIndex(index)
		setOpen(true)
	}

	return (
		<>
			<div className="gallery-item">
				{images.slice(0, 3).map((image, index) => (
					<div className="thumb" key={image.id}>
						<a onClick={() => handleClick(index)} className="img-popup">
							<img src={image.url} alt={image.title} />
							<div className="icon">
								<i className="far fa-plus" />
							</div>
						</a>
					</div>
				))}
			</div>
			<div className="gallery-item">
				{images.slice(3, 6).map((image, index) => (
					<div className="thumb" key={image.id}>
						<a onClick={() => handleClick(index + 3)} className="img-popup">
							<img src={image.url} alt={image.title} />
							<div className="icon">
								<i className="far fa-plus" />
							</div>
						</a>
					</div>
				))}
			</div>
			<Lightbox
				open={open}
				close={() => setOpen(false)}
				slides={images.map(image => ({ src: image.url }))}
				index={currentIndex}
			/>
		</>
	)
}
