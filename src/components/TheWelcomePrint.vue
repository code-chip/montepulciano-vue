<script setup>
$(window).on("load", onPageLoad);

function onPageLoad() {
  initListeners();
  restoreSavedValues();
}

function initListeners() {
  $("#printer").on("change", function () {
    var value = $(this).val();
    localStorage.setItem("printer", value);
  });
}

function restoreSavedValues() {
  var storedValue = localStorage.getItem("printer");
  $("#printer").val(storedValue);
  $("#nf").val();
}

$('#submitQuery').button().click(function () {
  $('#form1').submit();
});
</script>

<template>
  <div id='dialog-form'></div>
  <div id="top">
    <div class="screen-title ui-widget ui-widget-content">Cartão Presente Magento</div>
  </div>
  <div id="content">

    <div style='margin-bottom: 20px;'>
      <form id='form1' action='print_gift_card_magento.php' method='GET'>
        <table cellpadding="2" cellspacing="0" style='border-spacing: 40px 0; margin: 0 -30px'>
          <tr>
            <td>
              <label for='NFe'>BR do pedido: </label>
            </td>
            <td>
              <input type='text' name='incrementId' autofocus='enable' />
            </td>
            <td rowspan='2' style='vertical-align:top;padding-left:30px'>
              <input type='submit' id='submitQuery' value='Imprimir' />
            </td>
          </tr>
          <tr>
            <td>
              <label for='printer'>Impressora: </label>
            </td>
            <td>
              <select id='printer' name='printer' style='width:185px'>
                <option value='Selecione'>Selecione</option>
                <option value='Samsung01'>Samsung01</option>
                <option value='Samsung02'>Samsung02</option>
                <option value='Samsung03'>Samsung03</option>
                <option value='Samsung04'>Samsung04</option>
                <option value='Samsung05'>Samsung05</option>
                <option value='Samsung06'>Samsung06</option>
                <option value='Samsung07'>Samsung07</option>
                <option value='Samsung08'>Samsung08</option>
                <option value='Samsung09'>Samsung09</option>
                <option value='Samsung10'>Samsung10</option>
                <option value='Samsung11'>Samsung11</option>
                <option value='Samsung12'>Samsung12</option>
                <option value='Samsung13'>Samsung13</option>
                <option value='Samsung14'>Samsung14</option>
                <option value='Samsung15'>Samsung15</option>
                <option value='Samsung16'>Samsung16</option>
                <option value='Samsung17'>Samsung17</option>
                <option value='Samsung18'>Samsung18</option>
                <option value='Samsung19'>Samsung19</option>
                <option value='SamsungX'>SamsungX</option>
                <option value='SamsungY'>SamsungY</option>
              </select>
            </td>
          </tr>
        </table>
      </form>
    </div>
  </div>
</template>
