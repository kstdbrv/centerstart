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

/* core/themes/classy/templates/field/link-formatter-link-separate.html.twig */
class __TwigTemplate_d5fbce31ee68fa4e85e1dfd0cfab8f3370be15c31634cb1c84cb6ce0112c5442 extends \Twig\Template
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
        // line 15
        ob_start();
        // line 16
        echo "  <div class=\"link-item\">
    ";
        // line 17
        if (($context["title"] ?? null)) {
            // line 18
            echo "      <div class=\"link-title\">";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title"] ?? null), 18, $this->source), "html", null, true);
            echo "</div>
    ";
        }
        // line 20
        echo "    <div class=\"link-url\">";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["link"] ?? null), 20, $this->source), "html", null, true);
        echo "</div>
  </div>
";
        $___internal_2092ba2d76afc5d88d9596f40c4b484dc9a48fb1e16876689cf7e56c48698d44_ = ('' === $tmp = ob_get_clean()) ? '' : new Markup($tmp, $this->env->getCharset());
        // line 15
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(twig_spaceless($___internal_2092ba2d76afc5d88d9596f40c4b484dc9a48fb1e16876689cf7e56c48698d44_));
    }

    public function getTemplateName()
    {
        return "core/themes/classy/templates/field/link-formatter-link-separate.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  59 => 15,  52 => 20,  46 => 18,  44 => 17,  41 => 16,  39 => 15,);
    }

    public function getSourceContext()
    {
        return new Source("{#
/**
 * @file
 * Theme override of a link with separate title and URL elements.
 *
 * Available variables:
 * - link: The link that has already been formatted by l().
 * - title: (optional) A descriptive or alternate title for the link, which may
 *   be different than the actual link text.
 *
 * @see template_preprocess()
 * @see template_preprocess_link_formatter_link_separate()
 */
#}
{% apply spaceless %}
  <div class=\"link-item\">
    {% if title %}
      <div class=\"link-title\">{{ title }}</div>
    {% endif %}
    <div class=\"link-url\">{{ link }}</div>
  </div>
{% endapply %}
", "core/themes/classy/templates/field/link-formatter-link-separate.html.twig", "/var/www/html/web/core/themes/classy/templates/field/link-formatter-link-separate.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("apply" => 15, "if" => 17);
        static $filters = array("escape" => 18, "spaceless" => 15);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['apply', 'if'],
                ['escape', 'spaceless'],
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
