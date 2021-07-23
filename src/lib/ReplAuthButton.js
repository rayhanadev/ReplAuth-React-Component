import React from 'react';

class ReplAuthButton extends React.Component {
	constructor() {
		super();
		this.state = {
			accentPosition: 0,
			showAccent: false
		}
	}

	setAccentPosition(event) {
		const pos = event.nativeEvent.offsetX;
		this.setState({ accentPosition: pos });
	}

	handleMouseEnter(event) {
		this.setState({
			showAccent: true,
			accentPosition: event.nativeEvent.offsetX
		})
	}

	handleClick() {
		const width = 350;
		const height = 500;
		const left = (window.screen.width / 2) - (width / 2);
		const top = (window.screen.height / 2) - (height / 2);

		const authWindow = window.open(`https://replit.com/auth_with_repl_site?domain=${window.location.hostname}`, '_blank', `modal=yes, toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${width}, height=${height}, top=${top}, left=${left}`)

		window.addEventListener('message', (event) => {
			if (event.data !== 'auth_complete') return;
			window.removeEventListener('message', this);
			authWindow.close();
		});
	}

	render() {
		const { accentPosition, showAccent } = this.state;

		const accentStyle = {
			left: accentPosition - 150,
			opacity: showAccent ? 100 : 0
		}

		return (
			<React.Fragment>
				<button
					className={'button_' + this.props.theme}
					onClick={this.handleClick}
					onMouseMove={event => this.setAccentPosition(event)}
					onMouseEnter={event => this.handleMouseEnter(event)}
					onMouseLeave={() => this.setState({ showAccent: false })}
				>
					<div className={'buttonContent_' + this.props.theme}>
						<svg width="67" height="67" xmlns="http://www.w3.org/2000/svg">
							<g fill="none" fill-rule="evenodd" />
							<path d="M24.4168 31.9728C24.4168 31.9728 18.9576 52.0872 40.8388 52.2624C47.704 49.7064 52.7628 43.4408 53.5296 35.8868C53.5824 35.3644 53.598 34.8312 53.6096 34.2976C53.612 34.1568 53.6308 34.0204 53.6308 33.8792C53.6308 33.2708 53.5936 32.6712 53.54 32.0764C47.7592 54.834 22.1848 45.9204 24.4168 31.9728Z" fill={this.props.theme === 'dark' ? '#FFFFFF' : '#373737'} />
							<path d="M35.7304 24.5068C35.7304 24.5068 15.358 18.8176 15.6712 41.032C16.7156 43.7165 18.3364 46.139 20.4192 48.1288C20.5064 48.2116 20.5968 48.29 20.6852 48.3712C21.2743 48.9143 21.896 49.421 22.5468 49.8884C22.648 49.9604 22.7428 50.0404 22.8444 50.1108C23.5329 50.5815 24.2507 51.0077 24.9936 51.3868C25.2096 51.498 25.4312 51.5996 25.65 51.7032C26.2893 52.0042 26.9446 52.27 27.6128 52.4996C27.7768 52.5556 27.9336 52.6256 28.1 52.678C28.9011 52.9229 29.7172 53.1159 30.5432 53.2556C30.7928 53.2996 31.0456 53.336 31.2984 53.3708C32.1552 53.4948 33.0192 53.562 33.8852 53.572C33.9184 53.572 33.9504 53.5772 33.9836 53.5772C34.6364 53.5772 35.2812 53.542 35.9168 53.4796C13.0584 48.0284 21.7468 22.468 35.7304 24.5076V24.5068Z" fill={this.props.theme === 'dark' ? '#FFFFFF' : '#373737'} />
							<path d="M43.6712 35.0416C43.6712 35.0416 48.4912 14.7216 26.7952 15.6288C19.52 18.5028 14.3696 25.5816 14.3696 33.8776C14.3764 34.7708 14.4436 35.6628 14.5712 36.5468C19.1372 13.5572 45.1504 21.0028 43.6712 35.0416Z" fill={this.props.theme === 'dark' ? '#FFFFFF' : '#373737'} />
							<path d="M33.254 43.786C33.254 43.786 53.662 46.45 52.3848 27.0468C49.6072 19.578 42.4356 14.2468 34.0004 14.2468C32.8059 14.2515 31.6144 14.3647 30.4404 14.5852C53.1804 17.3768 47.27 43.9844 33.254 43.786Z" fill={this.props.theme === 'dark' ? '#FFFFFF' : '#373737'} />
							<path d="M39.6652 33.88C39.6651 35.3383 39.0858 36.7369 38.0546 37.768C37.0233 38.7992 35.6247 39.3784 34.1664 39.3784C32.7081 39.3783 31.3095 38.799 30.2784 37.7678C29.2472 36.7365 28.6679 35.3379 28.668 33.8796C28.668 32.4213 29.2473 31.0227 30.2785 29.9915C31.3097 28.9603 32.7083 28.381 34.1666 28.381C35.6249 28.381 37.0235 28.9603 38.0547 29.9915C39.0859 31.0227 39.6652 32.4213 39.6652 33.8796V33.88Z" fill={this.props.theme === 'dark' ? '#FFFFFF' : '#373737'} />
						</svg>
						{' '}
						{this.props.message ? this.props.message : 'Auth with Replit'}
					</div>
					<div
						className={'accent_' + this.props.theme}
						style={accentStyle}
					/>
				</button>
				<style jsx>{`
					.button_light {
						cursor: pointer;
						width: 275px;
						height: 60px;
						background: rgba(255, 255, 255, 0.7);
						border: none;
						border-radius: 2px;
						padding: 0px;
						overflow: hidden;
						outline: none;
						box-shadow: 0 0 60px 10px rgba(0, 0, 0, 0.2);
						transform: scale(1);
						transition: box-shadow 0.4s, transform 0.4s;
					}

					.button_dark {
						cursor: pointer;
						width: 275px;
						height: 60px;
						background: rgba(0, 0, 0, 0.7);
						border: none;
						border-radius: 2px;
						padding: 0px;
						overflow: hidden;
						outline: none;
						box-shadow: 0 0 60px 10px rgba(0, 0, 0, 0.2);
						transform: scale(1);
						transition: box-shadow 0.4s, transform 0.4s;
					}

					.button_light:hover {
						transform: scale(1.05);
					}

					.button_light:active {
						box-shadow: none;
						transform: scale(0.95);
					}

					.button_dark:hover {
						transform: scale(1.05);
					}

					.button_dark:active {
						box-shadow: none;
						transform: scale(0.95);
					}

					.buttonContent_light {
						font-family: quicksand;
						font-size: 24px;
						font-weight: 400;
						color: black;
						position: absolute;
						z-index: 100;
						pointer-events: none;
						display: flex;
						align-items: center;
						justify-content: center;
						width: 275px;
						height: 60px;
					}

					.buttonContent_dark {
						font-family: quicksand;
						font-size: 24px;
						font-weight: 400;
						color: white;
						position: absolute;
						z-index: 100;
						pointer-events: none;
						display: flex;
						align-items: center;
						justify-content: center;
						width: 275px;
						height: 60px;
					}

					.accent_dark {
						position: relative;
						z-index: 10;
						height: 100%;
						width: 150%;
						background: linear-gradient( to right, rgba(255, 239, 213, 0) 0%, rgba(255, 239, 213, 0.15) 50%, rgba(255, 239, 213, 0) 100%);
						transition: opacity 1s;
						pointer-events: none;
					}

					.accent_light {
						position: relative;
						z-index: 10;
						height: 100%;
						width: 150%;
						background: linear-gradient( to right, rgba(29, 27, 24, 0) 0%, rgba(29, 27, 24, 0.15) 50%, rgba(29, 27, 24, 0) 100%);
						transition: opacity 1s;
						pointer-events: none;
					}
				`}</style>
			</React.Fragment>
		)
	}
}

export default ReplAuthButton;