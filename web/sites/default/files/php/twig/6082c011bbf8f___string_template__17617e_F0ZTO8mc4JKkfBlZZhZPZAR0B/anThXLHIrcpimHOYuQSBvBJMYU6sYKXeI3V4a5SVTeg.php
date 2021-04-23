<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* __string_template__17617e8251c1e450cdf3fa1c809f9acde9c43cd924bec7d92b7a15b2e879c4fb */
class __TwigTemplate_0c5b0d24ebe94305102ca2e1fd29b10832a42938609b1bcb0d66022c4b4da4e4 extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 1
        echo "<div class=\"staff\">
  <div class=\"staff__image\">
    ";
        // line 3
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_photo_staff"] ?? null), 3, $this->source), "html", null, true);
        echo "
  </div>
  <div class=\"staff__bottom\">
";
        // line 6
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["view_node"] ?? null), 6, $this->source), "html", null, true);
        echo "
    <div class=\"staff__name\">
      ";
        // line 8
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_staff_name"] ?? null), 8, $this->source), "html", null, true);
        echo "
    </div>
    <div class=\"staff__position\">
      ";
        // line 11
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_staff_position"] ?? null), 11, $this->source), "html", null, true);
        echo "
    </div>
  </div>
</div>";
    }

    public function getTemplateName()
    {
        return "__string_template__17617e8251c1e450cdf3fa1c809f9acde9c43cd924bec7d92b7a15b2e879c4fb";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  60 => 11,  54 => 8,  49 => 6,  43 => 3,  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{# inline_template_start #}<div class=\"staff\">
  <div class=\"staff__image\">
    {{ field_photo_staff }}
  </div>
  <div class=\"staff__bottom\">
{{ view_node }}
    <div class=\"staff__name\">
      {{ field_staff_name }}
    </div>
    <div class=\"staff__position\">
      {{ field_staff_position }}
    </div>
  </div>
</div>", "__string_template__17617e8251c1e450cdf3fa1c809f9acde9c43cd924bec7d92b7a15b2e879c4fb", "");
    }
    
    public function checkSecurity()
    {
        static $tags = array();
        static $filters = array("escape" => 3);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                [],
                ['escape'],
                []
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }
}
