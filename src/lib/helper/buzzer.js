// export function setHostUUID(uuid) {
// 	try {
// 		localStorage.setItem('host_uuid', uuid);
// 		console.log('host_uuid set successfully');
// 	} catch (error) {
// 		console.error('Error setting host_uuid:', error);
// 	}
// }

// export function getHostUUID() {
// 	try {
// 		const uuid = localStorage.getItem('host_uuid');
// 		if (uuid) {
// 			console.log(`host_uuid retrieved successfully: ${uuid}` );
// 			return uuid;
// 		} else {
// 			console.log('No host_uuid found');
// 			return null;
// 		}
// 	} catch (error) {
// 		console.error('Error getting host_uuid:', error);
// 		return null;
// 	}
// }

// export function deleteHostUUID() {
// 	try {
// 		localStorage.removeItem('host_uuid');
// 		console.log('host_uuid deleted successfully');
// 	} catch (error) {
// 		console.error('Error deleting host_uuid:', error);
// 	}
// }

// To display the time diffrence for host
export function calculateTimeDifference(time1, time2) {
	let diff = Math.abs(new Date(time2) - new Date(time1));
	return diff < 1000 ? (diff / 1000).toFixed(2) : diff / 1000;
}

export function getBuzzUserIDFromLocal() {
	try {
		const buzzUserID = localStorage.getItem('buzz_userID');
		return buzzUserID !== null ? buzzUserID : null;
	} catch (error) {
		console.error('Error retrieving buzz user ID from local storage:', error);
		throw error;
	}
}

export function setBuzzUserIDToLocal(userID) {
	try {
		localStorage.setItem('buzz_userID', userID);
	} catch (error) {
		console.error('Error setting buzz user ID to local storage:', error);
		throw error;
	}
}

export function deleteBuzzUserIDFromLocal() {
	try {
		localStorage.removeItem('buzz_userID');
	} catch (error) {
		console.error('Error deleting buzz user ID from local storage:', error);
		throw error;
	}
}


// Return the deletion time
export function getDeletionTime(created_at) {
	const createdAtTime = new Date(created_at);
	const deletionTime = new Date(createdAtTime.getTime() + 3 * 60 * 60 * 1000); // 3 hours in milliseconds
	let hours = deletionTime.getHours();
	const minutes = deletionTime.getMinutes().toString().padStart(2, '0'); // Convert to string and pad with zero if needed
	const amPm = hours >= 12 ? 'PM' : 'AM';
	hours = hours % 12 || 12; // Convert hours to 12-hour format
	const deletionTimeFormatted = `${hours}:${minutes} ${amPm}`;
	return deletionTimeFormatted;
}