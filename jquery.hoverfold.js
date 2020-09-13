( function( $ ) {
	
	$.fn.hoverfold = function( args ) {

		this.each( function() {
		
			$( this ).children( '.view' ).each( function() {
			
				var $item 	= $( this ),
					img		= $item.children( 'img' ).attr( 'src' ),
					struct	= '<div class="slice s1">'; <span class="overlay"></span>

						struct	+='<div class="slice s2">'; <span class="overlay"></span>

							struct	+='<div class="slice s3">'; <span class="overlay"></span>

								struct	+='<div class="slice s4">'; <span class="overlay"></span>

									struct	+='<div class="slice s5">'; <span class="overlay"></span>
									struct	+='</div>';
								struct	+='</div>';
							struct	+='</div>';
						struct	+='</div>';
					struct	+='</div>';
					
				var $struct = $( struct );
				
				$item.find( 'img' ).remove().end().append( $struct ).find( 'div.slice' ).css( 'background-image', 'url(' + img + ')' ).prepend( $( '<span class="overlay" ></span>' ) );
				
			} );
			
		});

	};

} )( jQuery );