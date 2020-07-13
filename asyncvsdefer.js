{
  /* <script src="throttling.js"></script>
<script src="asyncvsdefer.js"></script> */
}

// Fetching and execution is done only after the HTML Parsing is done.

{
  /* <script async src="throttling.js"></script>
<script async src="asyncvsdefer.js"></script> */
}

//Feching is done parralelly and the HTML parsing stops and execution of fetched JS happens and then HTML parsing continues.

{
  /* <script defer src="throttling.js"></script>
<script defer src="asyncvsdefer.js"></script> */
}

//Feching is done parralelly and also HTML parsing happens when HTML parsing finishes execution of fetched JS happens.
