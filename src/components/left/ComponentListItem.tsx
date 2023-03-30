import React, { useContext, useState, useEffect, useCallback } from 'react';
import AppContext from '../../context/AppContext';
import { CopyCustomComp, CopyNativeEl, OrigCustomComp, AppInterface, Parent } from '../../utils/interfaces';
import { Originals, Copies } from '../../utils/interfaces';
import Modal from './Modal';
import { isCopyCustomComp } from '../../utils/parser';
import { trashCan } from '../../utils/trashCan';
import { deepCopy } from '../../utils/deepCopy';

type ComponentListItemProps = {
	comp: AppInterface | OrigCustomComp;
}

const ComponentListItem = (props: ComponentListItemProps): JSX.Element => {
	const comp = props.comp;
	const OriginalCustomComponent = comp as OrigCustomComp;
	const { currentComponent, setCurrentComponent, originals, setOriginals, copies, setCopies } = useContext(AppContext);
	const [ComponentItem, setComponentItem] = useState(null);

	// Modal states
	const [currentModal, setCurrentModal] = useState('state');
	const [isOpen, setIsOpen] = useState(false);

	// set State for components this needs to go on the originals
	//  and on copies?
	const [newState, setNewState] = useState('');
	// the input state will go on originals[name].state
	// 
	

	const handleClick = () => {
		setIsOpen(false);
		console.log('close button clicked');
	}
	
	useEffect(() => {
		comp.type === 'App'
			? setComponentItem(
					<div className={currentComponent === comp.type ? 'highlightedComponentListItem' : 'componentListItem'}  onClick={() => setCurrentComponent(comp.type)}>
						<span> {comp.type} </span>
						<button onClick={(e) => handleStateClick(e)}>State</button>
					</div>
				)
			: setComponentItem(
				<div className={currentComponent === comp.name ? 'highlightedComponentListItem' : 'componentListItem'}  onClick={() => setCurrentComponent(comp.name)}>
					<span> {comp.name} </span>
					<button onClick={(e) => handleStateClick(e)}>State</button>
					<button onClick={(e) => handleDeleteClick(e)}>Delete</button>
				</div>
			)
	}, [currentComponent, originals, copies]);

	const handleDeleteClick = (event: any): void => {
		// prevent the click from propagating to the parent div
		event.cancelBubble = true;
		if (event.stopPropagation) event.stopPropagation();

		setIsOpen(true);
		setCurrentModal('delete');
	}

	// TODO: Add a modal that asks the user if they are sure they want to delete the component
	// TODO: import type of event object
	// type for event React.MouseEvent<HTMLElement> but hasn't been working, so using any for now
	const handleDeleteConfirmClick = (event: any): void => {

		

		let newCopies = deepCopy(copies) as Copies;
		let newOriginals = deepCopy(originals) as Originals;
		const OriginalCustomComponent = comp as OrigCustomComp;
		const originalElement = originals[OriginalCustomComponent.name] as OrigCustomComp;

		// if the original element has no copies, delete the children of the original element
		// run trashcan on all children of the original element (children are typeof CopyNativeEl | CopyCustomComp)
		if (originalElement.copies.length === 0) {
			originalElement.children.forEach((childName: string) => {
				trashCan(newCopies[childName], newOriginals, newCopies);
			});
		} else {
			originalElement.copies.forEach((copyName: string) => {
				trashCan(newCopies[copyName], newOriginals, newCopies)
			});
		}

		// delete the custom component from originals
		delete newOriginals[OriginalCustomComponent.name];

		// set copies and originals to the new copies and originals
		setCopies(newCopies);
		setOriginals(newOriginals);

		// if the deleted component is the current component, set current component to null
		if (currentComponent === OriginalCustomComponent.name) setCurrentComponent('App');
	}
	
	// TODO: Add a modal for the user to input state
	const handleStateClick = (event: any): void => {

		// prevent the click from propagating to the parent div
		event.cancelBubble = true;
		event.stopPropagation && event.stopPropagation();
		
		// TODO: Flesh out state modal
		setIsOpen(true)
		setCurrentModal('state')
		console.log('clicked state')
	}

	const handleStateSaveClick = (event: any): void => {
		console.log(`new state for ${OriginalCustomComponent.name ?? comp.type}: ${newState}`);
		// create a copy of the originals object
		// update the componant with the added state in the copies
		setOriginals((prevOriginals) => {
			const updatedOriginals = { ...prevOriginals };
			const originalElement = updatedOriginals[OriginalCustomComponent.name ?? comp.type] as OrigCustomComp | AppInterface;
			if (originalElement.state.includes(newState)){
				alert('that state already exists on this component!');
				return prevOriginals
			}  
			else  {
			  originalElement.state.push(newState);
			  return updatedOriginals;
		}
		})
		setNewState('');
	}
	const handleClose = (): void => {
		
		setIsOpen(false);
	};

	const handleDeleteState = (value: string): void => {
		setOriginals((prevOriginals) => {
			const updatedOriginals = { ...prevOriginals };
			const originalElement = updatedOriginals[OriginalCustomComponent.name ?? comp.type] as OrigCustomComp | AppInterface;
			originalElement.state = originalElement.state.filter((el) => el !== value);
				
			return updatedOriginals;
			
		})
		setNewState('');
	}

	return (
		<>
			{ComponentItem}
			{isOpen ? (
				 <Modal handleClick={handleClick}>
					{currentModal === 'state' ? (
						<div id='stateModal'>
							<h3>Add State to {OriginalCustomComponent.name ?? comp.type}</h3>
							<p>
								Initialize or edit a state variable for {OriginalCustomComponent.name ?? comp.type}
								<div className="state-box">
									{OriginalCustomComponent.state.map((stateValue, index) => (
									<div key={index} className="state-item">
										{stateValue}
										<button onClick={() => handleDeleteState(stateValue)}>X</button>
									</div>
									))}
								  </div>
								</p>
							<label htmlFor="stateInput">New State</label>
							<input 
								id='stateInput' 
								value={newState} 
								onChange={(e) => setNewState(e.target.value)}
									/>
							<button onClick={() => handleClose()}>Cancel</button>
							<button onClick={handleStateSaveClick}>Save</button>
						</div>
						)
					: currentModal === 'delete' ? (
						<div id='deleteModal'>
							<h3>Are you sure you want to delete {OriginalCustomComponent.name}?</h3>
							<p>This will delete all occurrences of {OriginalCustomComponent.name} everywhere!</p>
							<div id='delete-modal-buttons'>
								<button onClick={handleDeleteConfirmClick}>Confirm</button>
								<button onClick={() => handleClose()}>Cancel</button>	
							</div>
						
						</div>
					) : null
					}
				</Modal>
				
				) : null}
		</>
	);
};

export default ComponentListItem;