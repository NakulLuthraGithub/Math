window.addEventListener("scroll", function(){
    var header = this.document.querySelector("nav");
    header.classList.toggle("sticky", window.scrollY > 0);
})

//next Script

var copyThis = document.getElementById("Copy-this")
function DisplayOk() {
    var displayIt = document.getElementById("CopyBg");
    displayIt.classList.toggle("active-ok")
}
function Copy() {
    var copyText = document.getElementById("Copy-this");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    DisplayOk()
}

function copyPlus() {
    copyThis.value = '+';
    Copy();
}
function copyEquals() {
    copyThis.value = '=';
    Copy();
}
function copySubtract() {
    copyThis.value = '-';
    Copy();
}
function copyNotEquals() {
    copyThis.value = '≠';
    Copy();
}
function copyDivide() {
    copyThis.value = '÷';
    Copy();
}
function copyMultiply() {
    copyThis.value = '*';
    Copy();
}
function copySquareRoot() {
    copyThis.value = '√';
    Copy();
}
function copyCubeRoot() {
    copyThis.value = '∛';
    Copy();
}
function copyPercentage() {
    copyThis.value = '%';
    Copy();
}
function copyAngle() {
    copyThis.value = '∠';
    Copy();
}
function copyApproximation() {
    copyThis.value = '≈';
    Copy();
}
function copyCaret() {
    copyThis.value = '^';
    Copy();
}
function copyPerMille() {
    copyThis.value = '‰';
    Copy();
}
function copyRightAngle() {
    copyThis.value = '∟';
    Copy();
}
function copyPerpendicular() {
    copyThis.value = '⊥';
    Copy();
}
function copy4thRoot() {
    copyThis.value = '∜';
    Copy();
}
function copyParallel() {
    copyThis.value = '∥';
    Copy();
}

function copyCongruent() {
    copyThis.value = '≅';
    Copy();
}
function copyTriangle() {
    copyThis.value = 'Δ';
    Copy();
}
function copyPi() {
    copyThis.value = 'π';
    Copy();
}
function copyInfinity() {
    copyThis.value = '∞';
    Copy();
}
function copySigma() {
    copyThis.value = '∑';
    Copy();
}
function copyDeterminant() {
    copyThis.value = 'A';
    Copy();
}
function copyTherefore() {
    copyThis.value = '∴';
    Copy();
}
function copyBecause() {
    copyThis.value = '∵';
    Copy();
}
function copyThereExists() {
    copyThis.value = '∃';
    Copy();
}
function copyThereNotExists() {
    copyThis.value = '∄';
    Copy();
}
function copyIntegral() {
    copyThis.value = '∫';
    Copy();
}
function copyEmptySet() {
    copyThis.value = 'Ø';
    Copy();
}
function copyEquivalence() {
    copyThis.value = '≡';
    Copy();
}

//Next script

let subMenu = document.getElementById("SubMenu")

function toggleMenu(){
    subMenu.classList.toggle("open-menu")
}
let Calc = document.getElementById("Calc")

function toggleCalc(){
    Calc.classList.toggle("active-calc")
}

//next Script

var ResetThis1 = document.getElementById("reset-this1")
var ResetThis2 = document.getElementById("reset-this2")
var ResetThis3 = document.getElementById("reset-this3")
var ResetThis4 = document.getElementById("reset-this4")

function ResetForm() {
    ResetThis1.value = '';
    ResetThis2.value = '';
    ResetThis3.value = '';
    ResetThis4.value = '';
}
//next script



function SliceZero() {
    var DisplayCalc = document.getElementById("display")
    if (DisplayCalc.value = "0") {
        DisplayCalc.value = ""
    }
    else{
        DisplayCalc.value += '1'
    }
}