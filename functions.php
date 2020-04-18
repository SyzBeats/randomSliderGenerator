<?php

/*
* Add your own functions here. You can also copy some of the theme functions into this file. 
* Wordpress will use those functions instead of the original functions then.
*/

 // Register and enqueue scripts
function my_custom_scripts() {
    wp_enqueue_script(
        'custom-script',
        get_stylesheet_directory_uri() . '/js/custom.js',
        array( 'jquery' )
    );
    wp_enqueue_script(
        'randomslider',
        get_stylesheet_directory_uri() . '/js/randomgenerator.js',
        array( ), "1.0.0"
    );
}

add_action( 'wp_enqueue_scripts', 'my_custom_scripts' ); 


// Nur eingeloggte Benutzer können API benutzen
 add_filter( 'rest_authentication_errors', function( $result ) {
    if ( ! empty( $result ) ) {
        return $result;
    }
    if ( ! is_user_logged_in() ) {
        return new WP_Error( 'rest_not_logged_in', 'You are not currently logged in.', array( 'status' => 401 ) );
    }
    return $result;
});

function add_svg_mime($mimes) {
 $mimes['svg'] = 'image/svg+xml';
 return $mimes;
}
add_filter('upload_mimes', 'add_svg_mime');



/*
Modal functionality
custom css js html
*/





add_action("wp_footer", "add_modal_markup");

function add_modal_markup(){
?>
<div class="kl-modalContainer">
	<div class="kl-modal">
		<div class="kl-modal_close">
			&times;
		</div>
		<div class="kl-modal_header">
			<div class="kl-logo">
				<img src="http://dev.luftfahrtversicherung24.de/wp-content/uploads/2019/11/GUTZWEILER-logo-r-ohneSlogan-614x156.png" alt="logo" loading="lazy" class="kl-modal_logo" />
			</div>
			<div class="kl-modal_title">
				Wir sind persönlich für Sie da!
			</div>
		</div>
		<div class="kl-modal_body">
			<p class="kl-modal_text">
				Mit unseren Telefonterminen garantieren wir Ihnen den notwendigen Schutz und gleichzeitig eine kompetente und vertrauensvolle Abwicklung Ihrer
				Anliegen.
			</p>
		</div>
		<div class="kl-modal_footer">
			<div class="kl-modal_icon">
				<i class="fa fa-phone"></i>
			</div>
			<div class="kl-modal_text">Bitte rufen Sie uns an unter <a class="kl-modal_link" href="tel:0761888662-0">0761 888662-0</a> Wir sind für Sie da!</div>
		</div>
	</div>
</div>

<?php
}


add_action("wp_footer", "add_modal_script");
function add_modal_script(){
?>
	
		<button id="contactmodalTrigger">
			<i class="fa fa-phone"></i>
		</button>
	
	<style>
		@keyframes blink{
			from {
				transform: scale3d(0,0,0);
				transform-origin: center;
			}
			80% {
				transform: scale3d(1.2, 1.2, 1.2);
			}
			to {
				transform: scale3d(0,0,0);
				transform-origin: center;
			}
		}
		#contactmodalTrigger{
			color: white;
			display: flex;
			justify-content: center;
			align-items: center;
			background: red;
			padding: 1.2rem;
			border-radius: 10rem;
			border: none;
			position: fixed;
			bottom: 2rem;
			left: 2rem;
			z-index: 50;
			box-shadow: 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.3);
		}
		
		#contactModalTrigger:hover{
			cursor: pointer;
		}

		#contactmodalTrigger::after{
			content: "";
			z-index: -1;
			position: absolute;
			width: 100%;
			height: 100%;
			background: #ff000066;
			animation: blink 2s ease infinite;
			border-radius: 100%;
			pointer-events: none;
		}
		
	</style>
<?php
}

