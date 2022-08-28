$(document).ready(function () {
  $("#SelectStafforStudent").change(function () {
    var val = $(this).val();
    if (val == "i1") {
      $("#SelectStafforStudent2").html(
        "<option value='test'>Select Staff</option><option value='test'>Academic</option><option value='test2'>Non Academic</option>"
      );
    } else if (val == "i-2") {
      $("#SelectStafforStudent2").html(
        "<option value='test' >Select Class</option><option value='test'>JSS1</option><option value='test'>JSS2</option><option value='test'>JSS3</option><option value='test2'>SS1</option><option value='test2'>SS2</option><option value='test2'>SS3</option>"
      );
    } else if (val == "i0") {
      $("#SelectStafforStudent2").html("<option value=''>Select one</option>");
    }
  });
});

$(document).ready(function () {
  $("#SelectDayWeek").change(function () {
    var val = $(this).val();
    if (val == "item1") {
      $("#SelectDayWeek2").html(
        "<option value='test'>Choose Day</option><option value='test'>1</option><option value='test'>2</option><option value='test'>3</option><option value='test'>4</option><option value='test'>5</option><option value='test'>6</option><option value='test'>7</option><option value='test'>8</option><option value='test'>9</option><option value='test'>10</option><option value='test'>11</option><option value='test'>12</option><option value='test'>13</option><option value='test'>14</option><option value='test'>15</option><option value='test'>16</option><option value='test'>17</option><option value='test'>18</option><option value='test'>19</option><option value='test'>20</option><option value='test'>21</option><option value='test'>22</option><option value='test'>23</option><option value='test'>24</option><option value='test'>25</option><option value='test'>26</option><option value='test'>27</option><option value='test'>28</option><option value='test'>29</option><option value='test'>30</option><option value='test'>31</option><option value='test'>32</option><option value='test'>33</option><option value='test'>34</option><option value='test'>35</option><option value='test'>36</option><option value='test'>37</option><option value='test'>38</option><option value='test'>39</option><option value='test'>40</option><option value='test'>41</option><option value='test'>42</option><option value='test'>43</option><option value='test'>44</option><option value='test'>45</option><option value='test'>46</option><option value='test'>47</option><option value='test'>48</option><option value='test'>49</option><option value='test'>50</option><option value='test'>51</option><option value='test'>52</option><option value='test'>53</option><option value='test'>54</option><option value='test'>55</option><option value='test'>56</option><option value='test'>57</option><option value='test'>58</option><option value='test'>59</option><option value='test'>60</option><option value='test'>61</option><option value='test'>62</option><option value='test'>63</option><option value='test'>64</option><option value='test'>65</option><option value='test'>66</option><option value='test'>67</option><option value='test'>68</option><option value='test'>69</option><option value='test'>70</option>"
      );
    } else if (val == "item2") {
      $("#SelectDayWeek2").html(
        "<option value='test'>Choose Week</option><option value='test'>1</option><option value='test'>2</option><option value='test'>3</option><option value='test'>4</option><option value='test'>5</option><option value='test'>6</option><option value='test'>7</option><option value='test'>8</option><option value='test'>9</option><option value='test'>10</option><option value='test'>11</option><option value='test'>12</option><option value='test'>13</option><option value='test'>14</option>"
      );
    } else if (val == "item0") {
      $("#SelectDayWeek2").html("<option value=''>select one</option>");
    }
  });
});

$(document).ready(function () {
  $("#SelectStafforStudent").change(function () {
    var val = $(this).val();
    if (val == "i1") {
      $("#SelectStafforStudent3").html(
        "<option value='test'>Select Arm</option><option value='test'>A</option><option value='test'>B</option><option value='test'>C</option><option value='test'>D</option><option value='test'>E</option><option value='test'>F</option><option value='test'>G</option><option value='test'>H</option><option value='test'>I</option><option value='test'>J</option><option value='test'>K</option><option value='test'>L</option><option value='test'>M</option>"
      );
    } else if (val == "i0") {
      $("#SelectStafforStudent3").html("<option value=''>Select one</option>");
    }
  });
});

$(function () {
  $("#SelectStafforStudent").change(function () {
    $(".colors").hide();
    $("#-" + $(this).val().split("-")[1]).show();
  });
});
