<?php
defined('JPATH_BASE') or die;

use Fabrik\Helpers\ArrayHelper;

$d    = $displayData;
$from = $d->from;

$calOpts = ArrayHelper::toString($d->calOpts);

$from->img = '<button id ="' . $from->id . '_cal_img" class="btn calendarbutton">' . $from->img . '</button>';

?>
<div class="fabrik_filter_container">
	<div class="input-append">
		<input type="text" name="<?php echo $from->name; ?>" id="<?php echo $from->id; ?>"
			value="<?php echo $from->value; ?>"<?php echo $calOpts; ?> />
		<?php echo $from->img; ?>
	</div>
	<br />
</div>

