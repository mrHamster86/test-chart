export default () => {
  return 'xxxx-xxxx-xxxx-xxxx'.replace( /[xy]/g, function ( c ) {
    const r = Math.random() * 16 | 0;
    return ( c == 'x' ? r : ( r & 0x3 | 0x8 ) ).toString( 16 );
  });
};