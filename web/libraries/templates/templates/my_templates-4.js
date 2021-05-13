/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

// Register a templates definition set named "default".
CKEDITOR.addTemplates( 'default', {
	// The name of sub folder which hold the shortcut preview images of the
	// templates.
	imagesPath: CKEDITOR.getUrl( CKEDITOR.plugins.getPath( 'templates' ) + 'templates/images/' ),

	// The templates definitions.
	templates: [ 
		{
		title: 'Шаблон №1 с датаАтрибутами',
		image: 'template1.gif',
		description: 'Основные сведения',
		html: '<div class="tp-1"><table class="table-1" border="1" width="850" align="center"><tbody><tr id="sec-1"><td>Полное наименование ОО</td><td></td></tr><tr id="sec-2"><td>Краткое наименование ОО</td><td></td></tr><tr id="sec-3"><td>Дата создания</td><td itemprop="regDate"></td></tr><tr id="sec-4" itemprop="UchredLaw"><td rowspan="11">Учредитель образовательной организации (наименование, местонахождения, график работы, телефон, электронная почта, адрес сайта в сети Интернет, Ф.И.О и телефоны курирующего отдела и специалистов)</td><td itemprop="nameUchred">Муниципальное образование город Краснодар</td></tr><tr itemprop="UchredLaw"><td>Функции и полномочия собственника имущества учреждения осуществляются администрацией МО г. Краснодар. Учреждение является юридическим лицом, находящимся в ведении департамента образования муниципального образования город Краснодар.</td></tr><tr><td>Директор департамента образования -<br><b>Некрасов Алексей Сергеевич</b><br>График приёма граждан директором департамента образования:<br>Каждый четверг с 14:00 до 18:00 (по предварительной записи)<br></td></tr><tr><td>Начальник отдела общего образования -<br><b>Петрова Татьяна Алексеевна</b><br>тел. 8(861) 251-05-37</td></tr><tr><td>Сотруднки отдела общего образования ДО:<br>Мельник Юлия Валерьевна, главный специалист,<br>8 (861) 255-69-00<br>Старченко Лариса Петровна, ведущий специалист,<br>8 (861) 251-05-39<br>Чепкова Елена Владимировна, главный специалист,<br>8 (861) 251-05-39</td></tr><tr itemprop="UchredLaw"><td itemprop="addressUchred">Адрес: 350000 г. Краснодар, ул. Коммунаров, 150</td></tr><tr><td>График работы: пн.- чт. 9.00-18.00, пт. 9.00-17.00 перерыв с 12.30 до 13.20</td></tr><tr itemprop="UchredLaw"><td itemprop="telUchred">Телефон: 8-992-63-65</td></tr><tr itemprop="UchredLaw"><td itemprop="websiteUchred">Адрес сайта департамента образования: http://do.krd.ru</td></tr><tr itemprop="UchredLaw"><td itemprop="mailUchred">Адрес электронной почты: edu@krd.ru</td></tr><tr><td>ФИО руководителя отдела ДО по округу, адрес, номер телефона</td></tr><tr><td rowspan="3">Наименования педставительств и филиалов образовательной организации (при наличии)</td></tr><tr itemprop="filInfo"><td itemprop="nameFil">Филиалов нет<p></p></td></tr><tr itemprop="repInfo"><td itemprop="nameRep">Представительств нет<p></p></td></tr><tr><td rowspan="3">Место нахождения OO, ее представительств и филиалов (при наличии)</td><td itemprop="address"></td></tr><tr itemprop="filInfo"><td itemprop="addressFil">адрес филиала</td></tr><tr itemprop="repInfo"><td itemprop="addressRep">адрес представительств</td></tr><tr><td rowspan="4">Режим и график работы OO, ее представительств и филиалов (при наличии)</td><td itemprop="workTime">пн.-пт. с 7.00 до 19.00 (как пример)</td></tr><tr><td><a href="#">Годовой календарный график работы на 2020-2021 уч.год</a></td></tr><tr itemprop="filInfo"><td itemprop="workTimeFil">филиала</td></tr><tr itemprop="repInfo"><td itemprop="workTimeRep">представительств</td></tr><tr><td rowspan="4">Контактные телефоны OO, ее представительств и филиалов (при наличии)</td><td itemprop="telephone">Телефон: 8 861-35-34-876</td></tr><tr><td>Факс: 8 861-35-34-876</td></tr><tr itemprop="filInfo"><td itemprop="telephoneFil">филиала</td></tr><tr itemprop="repInfo"><td itemprop="telephoneRep">представительств</td></tr><tr id="sec-5"><td rowspan="3">Адреса электронной почты OO, ее представительств и филиалов (при наличии)</td><td itemprop="email"></td></tr><tr itemprop="filInfo"><td itemprop="emailFil">филиала</td></tr><tr itemprop="repInfo"><td itemprop="emailRep">представительств</td></tr><tr id="sec-6"><td rowspan="3">Адреса официальных сайтов представительств и филиалов (при наличии) или страницах в информационно-коммуникационной сети "интернет</td><td></td></tr><tr itemprop="filInfo"><td itemprop="websiteFil">филиала</td></tr><tr itemprop="repInfo"><td itemprop="websiteRep">представительств</td></tr><tr><td rowspan="3">Места осуществления образовательной деятельности, в том числе не указанных в приложении к лицензии (реестре лицензий) на осу-ществление образовательной деятельности в соответствии с частью 4 статьи 91 Федерально-го закона от 29 декабря 2012 г. № 273-ФЗ «Об образовании в Российской Федерации».</td><td itemprop="addressPlace">адрес</td></tr><tr><td>адрес филиала</td></tr><tr><td>адрес представительств</td></tr><tr id="sec-10"><td>Территория, закрепленная за образовательной организацией, утвержденная постановлением администрации МО г.Краснодар</td><td></td></tr><tr id="sec-15"><td>Сменность, классы, обучающиеся в смену</td><td></td></tr><tr id="sec-17"><td>Наличие специальных (коррекционных) классов</td><td></td></tr><tr id="sec-18"><td>Наличие классов казачьей направленности</td><td></td></tr><tr id="sec-19"><td>Наличие профильных классов</td><td></td></tr><tr id="sec-21"><td>Изучаемые иностранные языки</td><td></td></tr><tr id="sec-23"><td>Наличие изучения предметов на повышенном уровне обучения</td><td></td></tr><tr id="sec-20"><td>Наличие возможности реализации дистанционного или электронного обучения</td><td></td></tr><tr id="sec-22"><td>Наличие групп продленного дня</td><td></td></tr><tr id="sec-24"><td>Наличие кружков, секций</td><td></td></tr><tr id="sec-25"><td>Наличие школьной формы (локальный акт, образцы)</td><td></td></tr><tr id="sec-11"><td>Схема проезда</td><td><p>Проезд</p><p>Маршрутное такси: 3, 4, 11, 25, 35, 36, 45, 47, 48, 85</p><p>Троллейбус: 15, 21</p><p>Смотрите карту <a href="https://yandex.ru/maps/-/CCUIRJedPC" target="blank">здесь.</a></p></td></tr></tbody></table></div>'
	},
	{
		title: 'Шаблон №2 с датаАтрибутами',
		image: 'template2.gif',
		description: 'Шаблон Структура и органы упрвления',
		html: '<div class="tp-2"><h3 class="text-align-center">Органы управления МБОУ СОШ № (по Уставу)</h3><table class="table-1 table-4" border="1" width="850" align="center"><tbody><thead><tr><td>Наименование органа управления</td><td>Место нахождения</td><td>Адрес официального сайта</td><td>Адрес электронной почты</td><td>Положение</td></tr></thead><tr><td>Общее собрание работников</td><td></td><td></td><td></td><td>Положение о собрании работников</td></tr><tr><td>Управляющий совет</td><td></td><td></td><td></td><td>Положение об управляющем совете</td></tr><tr><td>Педагогический совет</td><td></td><td></td><td></td><td>Положение о педсовете</td></tr></tbody></table><h3 class="text-align-center">Структурные подразделения МБОУ СОШ №</h3><table class="table-1 table-5" border="1" width="850" align="center"><tbody><thead><tr itemprop="structOrgUprav"><td itemprop="name">Наименование структурных подразделений</td><td temprop="fio">ФИО руководителя</td><td itemprop="post">Место нахождения</td><td itemprop="site">Адрес официального сайта</td><td itemprop="email">Адрес электронной почты</td><td itemprop="divisionClauseDocLink">Положение</td></tr></thead><tr itemprop="structOrgUprav"><td itemprop="name"></td><td temprop="fio"></td><td itemprop="addressStr"></td><td itemprop="site"></td><td itemprop="email"></td><td itemprop="divisionClauseDocLink"></td></tr><tr itemprop="structOrgUprav"><td itemprop="name"></td><td temprop="fio"></td><td itemprop="addressStr"></td><td itemprop="site"></td><td itemprop="email"></td><td itemprop="divisionClauseDocLink"></td></tr><tr itemprop="structOrgUprav"><td itemprop="name"></td><td temprop="fio"></td><td itemprop="addressStr"></td><td itemprop="site"></td><td itemprop="email"></td><td itemprop="divisionClauseDocLink"></td></tr></tbody></table></div>'
	},
	{
		title: 'Шаблон №3 с датаАтрибутами',
		image: 'template3.gif',
		description: 'Документы',
		html: '<div class="tp-3"><table class="table-1" border="1" width="850" align="center"><tbody><tr><td>Устав образовательной организации с актуальными изменениями</td><td itemprop="ustavDocLink"><a href="#">"Устав Приказ № 111 от 20.02.2020 ""О внесении изменений в Устав МБОУ СОШ № """</a></td></tr><tr><td id="accreditationDocLink">Свидетельство о государтвенной аккредитации</td><td><a href="#">Свидетельство</a></td></tr><tr><td>Правила внутреннего распорядка обучающихся</td><td itemprop="localActStud"><a href="#">Правила</a></td></tr><tr><td>Правила внутреннего трудового распорядка</td><td itemprop="localActOrder"><a href="#">Правила</a></td></tr><tr><td>Коллективный договор</td><td itemprop="localActCollec"><a href="#">договор</a></td></tr><tr><td>Отчёт о результатах самообследования за предшествующий календарный год</td><td id="reportEduDocLink"><a href="#">Отчёт</a></td></tr><tr><td>Дополнительные показатели самообследования за прошедший календарный год для проведения НОКУОД</td><td><a href="#">Отчет</a></td></tr><tr><td>Публичный доклад за предшествующий учебный год</td><td><a href="#">доклад</a></td></tr></tbody></table><h3 class="text-align-center">Результаты проверок</h3><table class="table-1" border="1" width="850" align="center"><tbody><tr><td>Предписания органов, осуществляющих государственный контроль (надзор) в сфере образования, отчёты об исполнении таких предписаний (до подтверждения органом, осуществляющим государственный контроль (надзор) в сфере образования, исполнения предписания или признания его недейстительным в установленном законом порядке)</td><td id="prescriptionDocLink">"Результаты проверок -1. Предписания органа управления. Отчет об исполнении предписания"</td></tr></tbody></table><h3 class="text-align-center">Локальные нормативные акты</h3><table class="table-1" border="1" width="850" align="center"><tbody></tbody><tr><td>Правила приема обучающихся</td><td itemprop="priemDocLink"><a href="#">правила</a></td></tr><tr><td>Режим занятий обучающихся</td><td itemprop="modeDocLink"><a href="#">режим занятий</a></td></tr><tr><td>Формы, периодичность и порядок текущего контроля успеваемости и промежуточной аттестации обучающихся</td><td itemprop="tekKontrolDocLink"><a href="#">формы</a></td></tr><tr><td>Порядок и основания перевода, отчисления, восстановления обучающихся</td><td itemprop="perevodDocLink"><a href="#">порядок и основания</a></td></tr><tr><td>Порядок оформления возникновения, приостановления и прекращения отношений между образовательной организацией и обучающимися и (или) родителями (законными представителями) несовершеннолетних обучающихся</td><td itemprop="vozDocLink"><a href="#">порядок оформления</a></td></tr><tr><td>Положение о сайте образовательной организации</td><td><a href="#">положение</a></td></tr><tr><td>Приказы, положения, должностные инструкции</td><td><a href="#">Ссылка на страницу с приказами, положениями и должностными инструкциями ОО</a></td></tr></table><table class="table-1" border="1" width="850" align="center"><h3 class="text-align-center">Противодействие коррупции</h3><tbody><tr><td>"Горячая линия"</td><td>-----------------------</td></tr><tr><td>Локальный акт о порядке пожертвований от граждан и юридических лиц</td><td>-----------------------</td></tr><tr><td>Реквизиты расчетного счета, на который по-ступают пожертвования</td><td>-----------------------</td></tr><tr><td>Отчет о расходовании пожертвований и целе-вых взносов физических и юридических лиц</td><td>-----------------------</td></tr></tbody></table><h3 class="text-align-center">Обработка персональных данных</h3><table class="table-1" border="1" width="850" align="center"><tbody><tr><td>Приказ о назначении ответственного за организацию обработки персональных данных в ОО</td><td><a href="#">приказ</a></td></tr><tr><td>Правила (положение) о порядке обработки персональных данных, утвержденное руководителем ОО</td><td><a href="#">положение</a></td></tr><tr><td>Типовая форма согласия на обработку персональных данных работников и обучающихся, в соответствии со ст. 18.1. Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных»</td><td><a href="#">типовая форма</a></td></tr></tbody></table></div>'
	},
	{
		title: 'Шаблон №4 с датаАтрибутами',
		image: 'template3.gif',
		description: 'Образование',
		html: '<div class="tp-4"><table id="aducation-1" class="table-1" border="1" width="850" align="center"><tbody><tr><td>Организационно-правовая форма</td><td>--------------------------</td></tr><tr itemprop="eduAccred"><td>Уровень образования</td><td itemprop="eduLevel">--------------------------</td></tr><tr itemprop="eduAccred"><td>Форма обучения и форма получения образования</td><td itemprop="eduForm">--------------------------</td></tr><tr itemprop="eduAccred"><td>Нормативный срок получения образования</td><td itemprop="learningTerm">--------------------------</td></tr><tr itemprop="eduAccred"><td>Язык образования</td><td itemprop="language">--------------------------</td></tr><tr><td>Копия образовательной программы (в том числе: планирование образовательной деятельности в соответствии с реализуемой программой)</td><td>--------------------------</td></tr><tr><td>Форма обучения в отношении каждой образовательной программы</td><td>--------------------------</td></tr><tr><td>Нормативный срок обучения в отношении каждой образовательной программы</td><td>--------------------------</td></tr><tr><td>Информация о реализуемых образовательных программах с указанием учебных предметов, курсов, дисциплин (модулей), практики, предусмотренных соответствующей образовательной программой (в части формируемой участниками образовательных отношений)</td><td>--------------------------</td></tr><tr><td>Копия адаптированной образовательной программы (в том числе: планирование образовательной деятельности в соответствии с реализуемой программой)</td><td>--------------------------</td></tr><tr><td>Информация об учебном плане с приложением его в виде электронного документа</td><td>--------------------------</td></tr><tr itemprop="eduOp"><td>Календарный учебный график с приложением его в виде электронного документа</td><td itemprop="educationShedule">--------------------------</td></tr><tr itemprop="eduAdOp"><td>Информация о реализуемых адаптированных образовательных программах с указанием учебных предметов, курсов, дисциплин (модулей), практики, предусмотренных соответствующей образовательной программой</td><td itemprop="opMain">--------------------------</td></tr><tr itemprop="eduAdOp"><td>Дополнительные общеразвивающие программы ОО (краткая аннотация по каждой)</td><td itemprop="educationAnnotation">--------------------------</td></tr><tr itemprop="eduAdOp"><td>Использование при реализации указанных образовательных программ электронного обучения и дистанционных образовательных технологий</td><td itemprop="eduEl">--------------------------</td></tr><tr><td rowspan="5">О численности обучающихся по реализуемым образовательным программам по источникам финансирования</td></tr><tr itemprop="eduChislen"><td itemprop="numberBF">за счет бюджетных ассигнований федерального бюджета:</td></tr><tr itemprop="eduChislen"><td itemprop="numberBR">за счет бюджетов субъектов Российской Федерации:</td></tr><tr itemprop="eduChislen"><td itemprop="numberBM">за счет местных бюджетов:</td></tr><tr itemprop="eduChislen"><td itemprop="numberP">по договорам об образовании за счет средств физических и (или) юридических лиц:</td></tr><tr itemprop="eduAccred"><td>Информация о сроках действия государственной аккредитации образовательной программы (при наличии государственной аккредитации)</td><td itemprop="dateEnd">--------------------------</td></tr><tr itemprop="eduChislen"><td>О численности обучающихся, являющихся иностранными гражданами</td><td itemprop="numberF">--------------------------</td></tr><tr><td>О лицензии на осуществление образовательной деятельности (выписке из реестра лицензий на осуществление образовательной деятельности)</td><td>--------------------------</td></tr></tbody></table><h3 class="text-align-center">План работы</h3><table id="aducation-2" class="table-1" border="1" width="850" align="center"><tbody><tr><td>План работы на месяц (в соответствии с годовым планом работы)</td><td>------------------------</td></tr></tbody></table><h3 class="text-align-center">Методические документы</h3><table id="aducation-3" class="table-1" border="1" width="850" align="center"><tbody><tr><td>Методические и иные документы, разработанные дошкольной образовательной организацией для обеспечения образовательного процесса</td><td>документы</td></tr></tbody></table></div>'
	},
	{
		title: 'Шаблон №5 с датаАтрибутами',
		image: 'template3.gif',
		description: 'Образовательные стандарты',
		html: '<div class="tp-5"><table id="aducation-4" class="table-1" border="1" width="850" align="center"><tbody><tr><td itemprop="eduFedDoc">Применяемые федеральные государственные образовательные стандарты</td><td itemprop="eduFedDoc">ФГОС</td></tr><tr><td itemprop="eduStandartDoc">Утвержденные образовательные стандарты</td><td>нет</td></tr></tbody></table></div>'
	},
	{
		title: 'Шаблон №6 с датаАтрибутами',
		image: 'template3.gif',
		description: 'Руководство. Педагогический состав.',
		html: '<div class="tp-6"><table id="aducation-5" class="table-1 borderless" border="1" width="850" align="center"><tbody><tr itemprop="rucovodstvo"><td itemprop="post">ДИРЕКТОР</td></tr><tr itemprop="rucovodstvo"><td itemprop="fio">ФИО</td></tr><tr itemprop="rucovodstvo"><td itemprop="telephone">телефон</td></tr><tr itemprop="rucovodstvo"><td itemprop="email">email</td></tr></tbody></table><table id="aducation-6" class="table-1 borderless" border="1" width="850" align="center"><tbody><tr itemprop="rucovodstvoZam"><td itemprop="post">Заместитель директора по ___</td></tr><tr itemprop="rucovodstvoZam"><td itemprop="fio">ФИО</td></tr><tr itemprop="rucovodstvoZam"><td itemprop="telephone">телефон</td></tr><tr itemprop="rucovodstvoZam"><td itemprop="email">email</td></tr></tbody></table><table id="aducation-7" class="table-1 table-4" border="1" width="850" align="center"><tbody><thead><tr><td>Представительство/ филиал</td><td>ФИО руководителя</td><td>Должность</td><td>Контактный телефон</td><td>Адрес электронной почты</td></tr></thead><tr itemprop="rucovodstvoFil"><td itemprop="nameFil">нет</td><td itemprop="fio"></td><td itemprop="post"></td><td temprop="telephone"></td><td itemprop="email"></td></tr><tr itemprop="rucovodstvoFil"><td itemprop="nameFil">нет</td><td itemprop="fio"></td><td itemprop="post"></td><td temprop="telephone"></td><td itemprop="email"></td></tr><tr itemprop="rucovodstvoFil"><td itemprop="nameFil">нет</td><td itemprop="fio"></td><td itemprop="post"></td><td temprop="telephone"></td><td itemprop="email"></td></tr></tbody></table><table id="aducation-8" class="table-1 borderless" border="1" width="850" align="center"><tbody><tr><td itemprop="teachingStaff"><a href="#">ПЕДАГОГИЧЕСКИЙ (НАУЧНО-ПЕДАГОГИЧЕСКИЙ) СОСТАВ</a></td></tr></tbody></table></div>'
	},
	{
		title: 'Шаблон №7 с датаАтрибутами',
		image: 'template3.gif',
		description: 'Обесечение и оснащенность образовательного процесса',
		html: '<div class="tp-7"><table id="aducation-10" class="table-1" border="1" width="850" align="center"><tbody><thead><tr><td colspan="2">Сведения о библиотеках</td></tr></thead><tr itemprop="purposeLibr"><td>Наименование объекта</td><td itemprop="objName">------------------------------</td></tr><tr itemprop="purposeLibr"><td>Адрес места нахождения объекта</td><td itemprop="objAddress">-----------------------------</td></tr><tr itemprop="purposeLibr"><td>Площадь объекта</td><td>-----------------------------</td></tr><tr itemprop="purposeLibr"><td>Количество мест</td><td itemprop="objCnt">-----------------------------</td></tr><tr itemprop="addressPlace"><thead><td colspan="2">Cведения об оборудованных учебных кабинетах</td></thead></tr><tr itemprop="purposeCab"><td>Адрес места нахождения</td><td itemprop="addressCab">--------------------------</td></tr><tr itemprop="purposeCab"><td>Наименование оборудованного учебного кабинета</td><td itemprop="nameCab">--------------------------</td></tr><tr itemprop="purposeCab"><td>Оснащенность оборудованного учебного кабинета</td><td itemprop="osnCab">--------------------------</td></tr><thead><tr itemprop="purposePrac"><td colspan="2">Cведения об объектах для проведения практических занятий</td></tr></thead><tr itemprop="purposePrac"><td>Адрес места нахождения</td><td itemprop="addressPrac">--------------------------</td></tr><tr itemprop="purposePrac"><td>Наименование объекта для проведения практических занятий</td><td itemprop="namePrac">--------------------------</td></tr><tr itemprop="purposePrac"><td>Оснащенность объекта для проведения практических занятий</td><td itemprop="osnPrac">--------------------------</td></tr><thead><tr><td colspan="2">Сведения об объектах спорта</td></tr></thead><tr itemprop="purposeSport"><td>Наименование объекта</td><td itemprop="objName">--------------------------</td></tr><tr itemprop="purposeSport"><td>Адрес места нахождения объекта</td><td itemprop="objAddress">--------------------------</td></tr><tr itemprop="purposeSport"><td>Площадь объекта</td><td itemprop="objSq">--------------------------</td></tr><tr itemprop="purposeSport"><td>Количество мест</td><td itemprop="objCnt">--------------------------</td></tr><tr><td>Cведения о доступе к информационным системам и информационно-телекоммуникационным сетям</td><td itemprop="comNet">--------------------------</td></tr><tr><td>Cведения об электронных образовательных ресурсах, к которым обеспечивается доступ обучающихся</td><td itemprop="purposeEios">--------------------------</td></tr></tbody></table><table id="aducation-13" class="table-1" border="1" width="850" align="center"><tbody><tr><td>Сведения о средствах обучения и воспитания</td><td itemprop="purposeFacil">--------------------------</td></tr><tr><td>Cведения о доступе к информационным системам и информационно-телекоммуникационным сетям</td><td itemprop="comNet">--------------------------</td></tr><tr><td>Cведения об электронных образовательных ресурсах, к которым обеспечивается доступ обучающихся</td><td itemprop="purposeEios">--------------------------</td></tr><tr><td>Cведения о собственных электронных образовательных и информационных ресурсов</td><td itemprop="eoisOwn">--------------------------</td></tr><tr><td><p>Cведения о сторонних электронных образовательных и информационных ресурсов (в том числе ссылки на информационно-образовательные ресурсы:</p><p>Официальный сайт Министерства просвещения РФ</p><p>Федеральный портал «Российское образование»</p><p>Информационная система «Единое окно доступа к образовательным ресурсам»</p><p>Единая коллекция цифровых образовательных ресурсов</p><p>Федеральный центр информационно-образовательных ресурсов</p></td><td itemprop="eoisSide">--------------------------</td></tr><tr><td>Cведения о специальных технических средств обучения коллективного и индивидуального пользования ресурсов</td><td itemprop="erList">--------------------------</td></tr></tbody></table><table id="aducation-11" class="table-1" border="1" width="850" align="center"><tbody><thead><tr><td colspan="2">Организация питания</td></tr></thead><tr itemprop="meals"><td>Наименование объекта</td><td itemprop="objName">--------------------------</td></tr><tr itemprop="meals"><td>Адрес места нахождения объекта</td><td itemprop="objAddress">--------------------------</td></tr><tr itemprop="meals"><td>Площадь объекта</td><td itemprop="objSq">--------------------------</td></tr><tr itemprop="meals"><td>Количество мест</td><td itemprop="objCnt">--------------------------</td></tr><tr><td>Об условиях питания обучающихся</td><td>--------------------------</td></tr><tr><td>Локальные нормативные акты по организации школьного питания</td><td>--------------------------</td></tr><tr><td>Питание обучающихся 1-4 классов</td><td>--------------------------</td></tr><tr><td>Ежедневное меню</td><td>--------------------------</td></tr><tr><td>Циклическое меню</td><td>--------------------------</td></tr><tr><td>Фотографии</td><td>--------------------------</td></tr></tbody></table><table id="aducation-12" class="table-1" border="1" width="850" align="center"><tbody><thead><tr><td colspan="2">Организация медицинского обслуживания</td></tr></thead><tr itemprop="health"><td>Наименование объекта</td><td itemprop="objName">--------------------------</td></tr><tr itemprop="health"><td>Адрес места нахождения объекта</td><td itemprop="objAddress">--------------------------</td></tr><tr itemprop="health"><td>Площадь объекта</td><td itemprop="objSq">--------------------------</td></tr><tr itemprop="health"><td>Количество мест</td><td itemprop="objCnt">--------------------------</td></tr><tr><td>Об условиях охраны здоровья обучающихся</td><td>--------------------------</td></tr><tr><td>График работы врача, медицинской сестры</td><td>--------------------------</td></tr><tr><td>Национальный календарь прививок</td><td>--------------------------</td></tr></tbody></table></div>'
	},
	{
		title: 'Шаблон №8 с датаАтрибутами',
		image: 'template3.gif',
		description: 'Стипендии и меры поддержки обучающихся',
		html: '<div class="tp-8"><table id="support" class="table-1" border="1" width="850" align="center"><tbody><tr><td>Наличие и условия предоставления обучающимся стипендий</td><td temprop="localAct">Стипендии в ОО не предусмотрены</td></tr><tr><td>Меры социальной поддержки</td><td itemprop="support"></td></tr></tbody></table></div>'
	},
	{
		title: 'Шаблон №9 с датаАтрибутами',
		image: 'template3.gif',
		description: 'Платные образовательные услуги',
		html: '<div class="tp-9"><table id="services" class="table-1" border="1" width="850" align="center"><tbody><tr><td>Документ о порядке оказания платных образовательных услуг</td><td>-----------------------</td></tr><tr><td>Образец договора об оказании платных услуг</td><td>-----------------------</td></tr><tr><td>Документ об утверждении стоимости обучения по каждой образовательной программе</td><td itemprop="paidParents">-----------------------</td></tr><tr><td>Документ об установлении размера платы, взимаемой с родителей (законных представителей) за присмотр и уход за детьми в группах продленного дня в ОО</td><td itemprop="paidEdu">-----------------------</td></tr><tr><td>Расписание занятий по платным дополнительным образовательным услугам, не относящимся к основным видам деятельности</td><td>-----------------------</td></tr></tbody></table></div>'
	},
	{
		title: 'Шаблон №10 с датаАтрибутами',
		image: 'template3.gif',
		description: 'Финансово-хозяйственная деятельность',
		html: '<div class="tp-10"><h3 class="text-align-center">Информация об объеме образовательной деятельности, финансовое обеспечение которой осуществляется:</h3><table id="fin-1" class="table-1" border="1" width="850" align="center"><tbody><tr><td itemprop="finBFVolume">за счет бюджетных ассигнований федерального бюджета</td><td>не предусмотрено</td></tr><tr><td>за счет бюджетов субъектов Российской Федерации</td><td itemprop="finBRVolume">не предусмотрено</td></tr><tr><td>за счет местных бюджетов</td><td itemprop="finBMVolume"><a href="#">Актуальное Муниципальное задание в форме электронного документа</a></td></tr><tr><td>по договорам об оказании платных образовательных услуг</td><td itemprop="finPVolume">не предусмотрено</td></tr></tbody></table><table id="fin-2" class="table-1 borderless" border="1" width="850" align="center"><tbody><tr itemprop="volume"><td>Информация о поступлении финансовых и материальных средств по итогам финансового года</td></tr><tr><td itemprop="finPost"><a href="#">Документ</a></td></tr><tr itemprop="volume"><td>Информация о расходовании финансовых и материальных средств по итогам финансового года</td></tr><tr><td itemprop="finRas"><a href="#">Документ</a></td></tr><tr><td>Копия утвержденного плана финансово хозяйственной деятельности или бюджетной сметы образовательной организации</td></tr><tr><td><a href="#">Документ</a></td></tr><tr><td>Отчёт о выполнении муниципального задания за прошедший год</td></tr><tr><td><a href="#">Документ</a></td></tr></tbody></table></div>'
	},
	{
		title: 'Шаблон №11 с датаАтрибутами',
		image: 'template3.gif',
		description: 'Количество вакантных мест для приема',
		html:'<div class="tp-11"><h3 class="text-align-center">Вакантные места для приема(перевода) обучающихся</h3><h5 class="text-align-center">Информация о количестве вакантных мест для приема(перевода) обучающихся за счет бюджетных ассигнований местных бюджетов по классам и параллелям<br><i>на дату</i></h5><table id="vacant-1" class="table-1" border="1" width="850" align="center"><tbody><thead><tr itemprop="vacant"><td>Параллель</td><td itemprop="numberBMVacant">Количество вакантных мест</td></tr></thead><tr><td>1</td><td></td></tr><tr><td>2</td><td></td></tr><tr><td>3</td><td></td></tr><tr><td>4</td><td></td></tr><tr><td>5</td><td></td></tr><tr><td>6</td><td></td></tr><tr><td>7</td><td></td></tr><tr><td>8</td><td></td></tr><tr><td>9</td><td></td></tr><tr><td>10</td><td></td></tr><tr><td>11</td><td></td></tr></tbody></table><table id="vacant-2" class="table-1 borderless" border="1" width="850" align="center"><tbody><tr><td><a href="#">Распорядительный акт главы МО о территории, закрепленной за ОО</a></td></tr><tr><td>Порядок приема</td></tr><tr><td><a href="#">Положение о правилах и порядке приема обучающихся в ОО</a></td></tr><tr><td>Перечень документов, необходимых для зачисления в ОО</td></tr><tr><td></td></tr></tbody></table></div>'
	},
	{
		title: 'Шаблон №12 с датаАтрибутами',
		image: 'template3.gif',
		description: 'Доступная среда',
		html: '<div class="tp-12"><table id="env-1" class="table-1 borderless" border="1" width="850" align="center"><tbody><tr><td>Специально оборудованные учебные кабинеты</td></tr><tr><td></td></tr><tr><td>Объекты для проведения практических занятий, приспособленные для использования инвалидами и лицами с ограниченными возможностями здоровья</td></tr><tr><td></td></tr><tr><td>Библиотека(и), приспособленные для использования инвалидами и лицами с ограниченными возможностями здоровья</td></tr><tr><td></td></tr><tr><td>Объекты спорта, приспособленные для использования инвалидами и лицами с ограниченными возможностями здоровья</td></tr><tr><td></td></tr><tr><td>Средства обучения и воспитания, приспособленные для использования инвалидами и лицами с ограниченными возможностями здоровья</td></tr><tr><td></td></tr><tr><td>Обеспечение беспрепятственного доступа в здания образовательной организации</td></tr><tr><td></td></tr><tr><td>Специальные условия питания</td></tr><tr><td></td></tr><tr><td>Специальные условия охраны здоровья</td></tr><tr><td></td></tr></tbody></table></div>'
	},
	{
		title: 'Шаблон №13 с датаАтрибутами',
		image: 'template3.gif',
		description: 'Международное сотрудничество',
		html: '<div class="tp-13"><table align="center" border="1" class="table-1" id="www-1" width="850"><tbody></tbody><thead><tr><td colspan="2">Информация о заключенных и планируемых к заключению договорах с иностранными и (или) международными организациями по вопросам образования и науки (при наличии)</td></tr></thead><tbody><tr itemprop="internationalDog"><td>Название государства</td><td itemprop="stateName">---------------------------</td></tr><tr itemprop="internationalDog"><td>Наименование организации</td><td itemprop="orgName">---------------------------</td></tr><tr itemprop="internationalDog"><td>Реквизиты договора</td><td itemprop="dogReg">---------------------------</td></tr></tbody><thead><tr><td colspan="2">Информация о международной аккредитации образовательных программ (при наличии)</td></tr></thead><tbody><tr itemprop="internationalAccr"><td>Код</td><td itemprop="eduCode">---------------------------</td></tr><tr itemprop="internationalAccr"><td>Наименование профессии, специальности, направления подготовки</td><td itemprop="eduName">---------------------------</td></tr><tr itemprop="internationalAccr"><td>Наименование аккредитующей организации</td><td itemprop="orgName">---------------------------</td></tr><tr itemprop="internationalAccr"><td>Срок действия международной аккредитации (дата окончания действия свидетельства о международной аккредитации)</td><td itemprop="dateEnd">---------------------------</td></tr></tbody></table></div>'
	},
]
} );








