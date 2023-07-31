import { Grid } from '@mui/material'
import logo1 from '../../assets/img/logo-footer-1.png'
import logo2 from '../../assets/img/logo-footer-2.png'
import logo3 from '../../assets/img/logo-footer-3.png'
import logo4 from '../../assets/img/logo-footer-4.png'

import './styles.css'
const Footer = () => {
	return (
		<div className={'footer'}>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<div className={'footer-info'}>
						<h4>We are coding the world of tomorrow_</h4>
						<p>
							DaCodes es una de las mejores empresas de
							desarrollo de software en México y LATAM.
							Lo que nos separa de los demás es el nivel
							de involucramiento que tenemos en nuestros
							proyectos y la pasión que tenemos por desarrollar
							productos digitales de calidad mundial. Somos
							un equipo de 220+ dacoders especializados en
							la planeación, diseño, desarrollo, implementación
							e innovación continua de productos digitales disruptivos.
						</p>
					</div>
				</Grid>
				<Grid item xs={12}>
					<div className={'footer-logos'}>
						<img src={logo1} alt="logo1" />
						<img src={logo2} alt="logo2" />
						<img src={logo3} alt="logo3" />
						<img src={logo4} alt="logo4" />
					</div>
				</Grid>
			</Grid>
		</div>
	)
}

export default Footer