var WishJryVar = [
    {
        Name: "Laptop",
        Amount: 90000,
        Target: "2030-04-21"
    },
    {
        Name: "Dress",
        Amount: 9000,
        Target: "2025-10-04"
    },
    {
        Name: "Iphone",
        Amount: 50000,
        Target: "2027-07-17"
    },
    {
        Name: "Gold",
        Amount: 100000,
        Target: "2021-12-11"
    }
]

var TabBdyVar = document.getElementById("TabBdyUid")
function TblLodFnc() {
    TabBdyVar.innerHTML = ""
    WishJryVar.map(
        (ObjVar,IdxVar)=>TabBdyVar.innerHTML+=`<tr>
        <td>${ObjVar.Name}</td>
        <td>${ObjVar.Amount}</td>
        <td>${ObjVar.Target}</td>
        <td>
            <div class="d-grid gap-2 d-md-block"><button class="btn btn-outline-success" type="button" onclick="EditWish(${IdxVar})" >Edit</button>
             <button class="btn btn-outline-danger" type="button" onclick="DeleteWish(${IdxVar})">Delete</button> </div></td>
    </tr>`
    )
}
TblLodFnc()

var WishIptVar = document.getElementById("WshIptUid")
var AmtIptVar = document.getElementById("AmtIptUid")
var DeadlineVar = document.getElementById("DeadlineUid")

function AddWish() {
    var TempVar = {
        Name: WishIptVar.value,
        Amount: AmtIptVar.value,
        Target: DeadlineVar.value
    }
    WishJryVar.push(TempVar)
    TblLodFnc()
    WishIptVar.value = ""
    AmtIptVar.value = ""
    DeadlineVar.value = ""
}


var EditIdxVar = ""
function EditWish(RvgIdxVar) {
    EditIdxVar = RvgIdxVar
    WishIptVar.value = WishJryVar[RvgIdxVar].Name
    AmtIptVar.value = WishJryVar[RvgIdxVar].Amount
    DeadlineVar.value = WishJryVar[RvgIdxVar].Target
}

function UpdateWish() {
    WishJryVar[EditIdxVar].Name = WishIptVar.value
    WishJryVar[EditIdxVar].Amount = AmtIptVar.value
    WishJryVar[EditIdxVar].Target = DeadlineVar.value
    TblLodFnc()
    EditIdxVar = ""
    WishIptVar.value = ""
    AmtIptVar.value = ""
    DeadlineVar.value = ""
}

function DeleteWish(RvgIdxVar) {
    if(confirm("Are you sure you want to delete?") == true) {
    WishJryVar.splice(RvgIdxVar,1)
    TblLodFnc()}
}
