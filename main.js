// Your code here.
const makeBoss = function(create) {	
	const boss = {
	name: create.name,
	attackDamage: create.attackDamage,
	boss: true,
	level: create.level,
	alive: create.alive,
	hitPoints: create.hitPoints,
	};
	return boss;
	};
	
	const levelUp = function(upOne) {
	const leveledUp = {
	name: upOne.name,
	attackDamage: upOne.attackDamage,
	boss: upOne.boss,
	level: upOne.level + 1,
	alive: upOne.alive,
	hitPoints: upOne.hitPoints,
	};
	return leveledUp;
	};
	
	const buff = function(buffMod) {
	const buffed = {
	name: buffMod.name,
	attackDamage: buffMod.attackDamage + 15,
	boss: buffMod.boss,
	level: buffMod.level,
	alive: buffMod.alive,
	hitPoints: buffMod.hitPoints,
	};
	return buffed;
	};
	
	const makeSuper = function(superMan) {
	const superCharacter = {
	name: 'Super ' + superMan.name,
	attackDamage: superMan.attackDamage,
	boss: superMan.boss,
	level: superMan.level,
	alive: superMan.alive,
	hitPoints: superMan.hitPoints,
	};
	return superCharacter;
	};
	
	const hitEnemy = function(nerf){
	const nerfed = {
	name: nerf.name,
	attackDamage: nerf.attackDamage,
	boss: nerf.boss,
	level: nerf.level,
	alive: nerf.alive,
	hitPoints: nerf.hitPoints - 10,
	};
	
	if(nerfed.hitPoints <= 0){
	nerfed.alive = false;
	}
	return nerfed;
	};
	
	const beastMode = function(superBuff){
	const beast = {
	name: 'Super ' + superBuff.name,
	attackDamage: superBuff.attackDamage + 15,
	boss: true,
	level: superBuff.level + 1,
	alive: superBuff.alive,
	hitPoints: superBuff.hitPoints,
	};
	return beast;
};

// Our code here. Don't touch!
if (typeof makeBoss === 'undefined') {
  makeBoss = undefined
}

if (typeof levelUp === 'undefined') {
  levelUp = undefined
}

if (typeof buff === 'undefined') {
  buff = undefined
}

if (typeof makeSuper === 'undefined') {
  makeSuper = undefined
}

if (typeof hitEnemy === 'undefined') {
  hitEnemy = undefined
}

if (typeof beastMode === 'undefined') {
  beastMode = undefined
}


module.exports = {
  makeBoss,
  levelUp,
  buff,
  makeSuper,
  hitEnemy,
  beastMode,
}
