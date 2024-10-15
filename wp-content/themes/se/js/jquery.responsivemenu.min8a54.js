( function( window, $, undefined ) {
	'use strict';

	$( 'nav.nav-primary' ).before( '<button class="responsive-menu-toggle" role="button" aria-pressed="false"><div class="responsive-menu-icon hamburger hamburger--slider"><div class="hamburger-box"><div class="hamburger-inner"></div></div></div><div class="responsive-menu-text"></div></button>' ); // Add toggles to menus
	$( 'nav.nav-primary .sub-menu' ).before( '<button class="responsive-sub-menu-toggle" role="button" aria-pressed="false"></button>' ); // Add toggles to sub menus

	// Show and hide the navigation on main click
	$( '.responsive-menu-toggle' ).on( 'click', function() {
		var $this = $( this );
		$this.attr( 'aria-pressed', function( index, value ) {
			return 'false' === value ? 'true' : 'false';
		});

		$this.toggleClass( 'activated' );
		$this.find( '.hamburger' ).toggleClass( 'is-active' );
		$( 'nav.nav-primary' ).toggleClass( 'activated' );
	});
	
	// Show and hide the submenu
	$( '.responsive-sub-menu-toggle' ).on( 'click', function() {
		var $this = $( this );
		$this.attr( 'aria-pressed', function( index, value ) {
			return 'false' === value ? 'true' : 'false';
		});

		$this.toggleClass( 'activated' );
		$this.next( '.sub-menu' ).toggleClass( 'activated' );
	});
	
})( this, jQuery );