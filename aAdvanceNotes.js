// Using .on() to handle events made by dynamic content after the page has loaded
<script>
    $(document).ready(function(){
        $('button').click(function(){
            $('div').append('<h3>I am a new content</h3>');
        });
        $('div.a').on('mouseover', 'h3', function(){ 
            $(this).css('color', 'pink');
        });
    });
</script>
<body>
  <button>Click me</button>
  <div class="a">
   <h3>I am old content</h3>
  </div>
  <div class="b">
   <h3>I am old content</h3>
  </div>
</body>

// Using callbacks (The preferred way)
// Callback = calling a function at some other time from within another function
// Why?  must wait until that dynamic content is created before I can attach any event listener to it. One way to do this is to attach the event handler in the same function that creates the dynamic content. 
<script>
    
    {/* First declare all callback functions outside of the document.ready function */}
    function attach_handlers(){
        $('.alert').click(function(){
            alert('you clicked me!');
        });
    }
    {/* Now do the document.ready function */}
    $(document).ready(function(){
        attach_handlers();

        $('button').click(function(){
            $('div').append('<h3>I am a new content</h3>');
    // Now here is the callback in another function:
            attach_handlers();
        });
    });
</script>
<body>
  <button>Click me</button>
  <div class="a">
   <h3>I am old content</h3>
  </div>
  <div class="b">
   <h3>I am old content</h3>
  </div>
</body>

// Another example with great syntax and alignment
<script>
    function attach_h3_handlers() {
        $('h3').click( function() { alert('You clicked an H3!'); });
    }
    $(document).ready( function() {
        attach_h3_handlers();
        $('button').click( function() {
            $('div').append('<h3>I am a dynamically generated H3</h3>');
            attach_h3_handlers();
        });
    });
</script>
<body>
    <div>
        <button>Click me to add a new H3 tag!</button>
        <h3>Click me to see a message!</h3>
    </div>
</body>
