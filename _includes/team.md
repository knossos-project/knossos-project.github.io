<header class="major">
About us<span class="__icon"><i class="fa fa-users"></i></span>
---------------------------------------------------------------------
</header>

**KNOSSOS** is developed by a group of students from *Heidelberg University* and *Karlsruhe Institute of Technology*, employed at *Max Planck Institute for Medical Research*.

{% for member in site.data.members %}
{% assign loopindex = forloop.index | modulo: 2 %}
{% if forloop.last == true %}
<div class="row -text-center">
<div class="row__col member-image">
<img class="-circle" src="{{ site.baseurl }}images/team/{{ member.picture }}" alt="{{ member.description }}" width="200" height="200">
<h4>{{ member.name }}</h4>
<p>{{ member.description }}</p>
</div>
<div class="row__col member-image">
</div>
</div>
{% else %}
{% if loopindex == 1 %}
<div class="row -text-center">
<div class="row__col member-image">
<img class="-circle" src="{{ site.baseurl }}images/team/{{ member.picture }}" alt="Picture of {{ member.name }}, {{ member.description }}" width="200" height="200">
<h4>{{ member.name }}</h4>
<p>{{ member.description }}</p>
</div>
{% else %}
<div class="row__col member-image">
<img class="-circle" src="{{ site.baseurl }}images/team/{{ member.picture }}" alt="Picture of {{ member.name }}, {{ member.description }}" width="200" height="200">
<h4>{{ member.name }}</h4>
<p>{{ member.description }}</p>
</div>
</div>
{% endif %}
{% endif %}
{% endfor %}

### Contributors

We would like to thank the following persons for their contributions towards **KNOSSOS:**

{% for member in site.data.contributors %}{% assign loopindex = forloop.index %}{{ member.name }}{% if forloop.last != true %}, {% endif %}{% endfor %}


### Contact us

If you have any questions or suggestions regarding **KNOSSOS**, feel free to write us:

<a href="mailto:knossos-team@mpimf-heidelberg.mpg.de" class="button button--small"><i class="fa fa-envelope"></i> knossos-team@mpimf-heidelberg.mpg.de</a>
