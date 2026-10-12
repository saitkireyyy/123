import fs from "fs";

const path = "assets/index-Bw5ki2Gp.js";
let s = fs.readFileSync(path, "utf8");
const origLen = s.length;

function replaceOnce(oldStr, newStr, label) {
  const count = s.split(oldStr).length - 1;
  if (count !== 1) {
    console.error(`FAIL ${label} count=${count}`);
    process.exit(1);
  }
  s = s.replace(oldStr, newStr);
  console.log(`OK ${label}`);
}

replaceOnce(
  "function W_(e){let t=new W,n=jg(p_),r=X_(e),i=lv(e),a=[Pv($_(e),`RingTrack`),Pv(nv(e),`StraightRoads`),Pv(rv(e)),Pv(sv(e)),Pv(cv()),Pv(uv()),Pv(dv(e))];return t.name=`SpeedCityHubMap`,t.userData.mapDefinitionId=p_.id,t.add(r),t.add(...a),t.add(i),t.add(iv()),t.add(pv()),t.add(hv(e)),t.add(n.root),Fv(t,g_),t}",
  "function W_(e){let t=new W,r=X_(e);return t.name=`SpeedCityHubMap`,t.userData.mapDefinitionId=p_.id,t.add(r),t}",
  "flat W_",
);

replaceOnce(
  "function J_(){return Jh(p_).flatMap(e=>{",
  "function J_(){return [];return Jh(p_).flatMap(e=>{",
  "empty obstacles",
);

replaceOnce(
  "function q_(){let e=[{center:[0,0,0],size:[h_.size[0],O_,h_.size[1]]},{owner:`ShopArea`,center:[-78,.26,-24],size:[28,.52,22]},{owner:`RacePortal`,center:[0,.26,-82],size:[24,.52,20]},{owner:`PetsZone`,center:[78,.26,0],size:[24,.52,24]},{owner:`RebirthZone`,center:[0,.26,82],size:[28,.52,22]}]",
  "function q_(){let e=[{center:[0,0,0],size:[h_.size[0],O_,h_.size[1]]}]",
  "flat colliders",
);

replaceOnce(
  "this.speedSimulatorMode=this.gameMode.id===`speed-simulator`?new km:void 0",
  "this.speedSimulatorMode=void 0",
  "disable mode",
);

replaceOnce(
  "Pf={mainMenuEnabled:!0,vfxEnabled:!0,pickupEnabled:!0,inventoryEnabled:!0,heldItemEnabled:!0,combatEnabled:!1,handAttackEnabled:!1,enemyAttackEnabled:!1,mobileActionButtonsEnabled:!0,healthHudEnabled:!1,shopEnabled:!0,petsEnabled:!0,eggsEnabled:!0,rewardWheelEnabled:!0,leaderboardEnabled:!0,asyncMultiplayerEnabled:!0,interstitialAdsEnabled:!0}",
  "Pf={mainMenuEnabled:!1,vfxEnabled:!1,pickupEnabled:!1,inventoryEnabled:!1,heldItemEnabled:!1,combatEnabled:!1,handAttackEnabled:!1,enemyAttackEnabled:!1,mobileActionButtonsEnabled:!0,healthHudEnabled:!1,shopEnabled:!1,petsEnabled:!1,eggsEnabled:!1,rewardWheelEnabled:!1,leaderboardEnabled:!1,asyncMultiplayerEnabled:!1,interstitialAdsEnabled:!1}",
  "feature flags",
);

replaceOnce(
  "speedCityVisualsEnabled:p_.environment?.speedCityVisualsEnabled??!0",
  "speedCityVisualsEnabled:!1",
  "no city visuals",
);

replaceOnce(
  "keys={forward:!1,backward:!1,left:!1,right:!1,jump:!1,interact:!1,attack:!1}",
  "keys={forward:!1,backward:!1,left:!1,right:!1,jump:!1,interact:!1,attack:!1,sprint:!1}",
  "keys sprint",
);

replaceOnce(
  "{forward:this.keys.forward,backward:this.keys.backward,left:this.keys.left,right:this.keys.right,jump:this.keys.jump,interact:this.keys.interact,attack:this.keys.attack||this.pointerAttack||this.mobileState.attack,selectedSlotIndex:e,cameraLockState:t,joystickX:this.mobileState.x,joystickY:this.mobileState.y,joystickJump:this.mobileState.jump}",
  "{forward:this.keys.forward,backward:this.keys.backward,left:this.keys.left,right:this.keys.right,jump:this.keys.jump,interact:this.keys.interact,attack:this.keys.attack||this.pointerAttack||this.mobileState.attack,sprint:this.keys.sprint||Math.hypot(this.mobileState.x,this.mobileState.y)>.72,selectedSlotIndex:e,cameraLockState:t,joystickX:this.mobileState.x,joystickY:this.mobileState.y,joystickJump:this.mobileState.jump}",
  "getState sprint",
);

replaceOnce(
  "(e.code===`ShiftLeft`||e.code===`ShiftRight`)&&(e.preventDefault(),this.requestCameraLockToggle(!0))",
  "(e.code===`KeyC`)&&(e.preventDefault(),this.requestCameraLockToggle(!0))",
  "C for camera lock",
);

replaceOnce(
  "e===`Space`&&(this.keys.jump=t),e===`KeyE`&&(this.keys.interact=t),e===`KeyF`&&(this.keys.attack=t)",
  "e===`Space`&&(this.keys.jump=t),(e===`ShiftLeft`||e===`ShiftRight`)&&(this.keys.sprint=t),e===`KeyE`&&(this.keys.interact=t),e===`KeyF`&&(this.keys.attack=t)",
  "setKey sprint",
);

replaceOnce(
  "Cm={walkSpeed:10.2,acceleration:42,deceleration:52,airControl:.62,rotationSpeed:20,jumpVelocity:14,gravity:38,inputDeadZone:.16,movementThreshold:.06}",
  "Cm={walkSpeed:6.4,runSpeed:11.2,acceleration:42,deceleration:52,airControl:.62,rotationSpeed:20,jumpVelocity:14,gravity:38,inputDeadZone:.16,movementThreshold:.06}",
  "walk/run speeds",
);

replaceOnce(
  "currentSpeedValue=0;movementAmountValue=0;speedMultiplier=1;constructor(e={}){super(bm),this.useExternalAvatar(vm),this.animator=new np(this),this.movementConfig={...Cm,...e}}",
  "currentSpeedValue=0;movementAmountValue=0;speedMultiplier=1;sprintHeld=!1;constructor(e={}){super(bm),this.useExternalAvatar(vm),this.animator=new np(this),this.movementConfig={...Cm,...e}}",
  "sprintHeld field",
);

replaceOnce(
  "getEffectiveWalkSpeed(){return this.movementConfig.walkSpeed*this.speedMultiplier}",
  "getEffectiveWalkSpeed(){return (this.sprintHeld?this.movementConfig.runSpeed:this.movementConfig.walkSpeed)*this.speedMultiplier}",
  "effective speed",
);

replaceOnce(
  "getAnimationState(){return this.isGrounded?this.isMovingState?`run`:`idle`:this.velocityY>=0?`jump`:`fall`}",
  "getAnimationState(){return this.isGrounded?this.isMovingState?this.sprintHeld?`run`:`walk`:`idle`:this.velocityY>=0?`jump`:`fall`}",
  "walk/run anim",
);

replaceOnce(
  "updateHorizontalMovement(e,t,n,r){let i=t.left||t.right,a=t.forward||t.backward;",
  "updateHorizontalMovement(e,t,n,r){this.sprintHeld=!!t.sprint;let i=t.left||t.right,a=t.forward||t.backward;",
  "read sprint input",
);

fs.writeFileSync(path, s);
console.log("written", s.length, "from", origLen);
