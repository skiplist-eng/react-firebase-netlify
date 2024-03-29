import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {Popover, PopoverInteractionKind, Position} from '@blueprintjs/core'
import NewSongPopoverForm from './NewSongPopoverForm'

class Header extends Component {
    constructor(props) {
        super(props);
        this.closePopover = this.closePopover.bind(this);
        this.state = {
            popoverOpen: false
        }
    }

    closePopover() {
        this.setState({popoverOpen: false})
    }
    render() {
        return (
            <nav className="pt-navbar">
                <div className="pt-navbar-group pt-align-left">
                    <div className="pt-navbar-heading">Skiplist Starter Kit</div>
                    {this.props.authenticated
                        ? <input className="pt-input" placeholder="Search songs..." type="text"/>
                        : null}
                </div>
                {this.props.authenticated
                    ? (
                        <div className="pt-navbar-group pt-align-right">
                            <Link className="pt-button pt-minimal pt-icon-music" to="/songs">Songs</Link>
                            <Popover
                                content={(<NewSongPopoverForm
                                    addSong={this.props.addSong}
                                    postSubmitHandler={this.closePopover}/>)}

                                interactionKind={PopoverInteractionKind.CLICK}
                                isOpen={this.state.popoverOpen}
                                onInteraction={(state) => this.setState({popoverOpen: state})}
                                position={Position.BOTTOM}>

                                <button className="pt-button pt-minimal pt-icon-add" aria-label="add new song"/>
                            </Popover>
                            <span className="pt-navbar-divider"/>
                            <button className="pt-button pt-minimal pt-icon-user"/>
                            <button className="pt-button pt-minimal pt-icon-cog"/>
                            <Link className="pt-button minimal pt-icon-log-out" to="/logout" aria-label="Log Out"/>
                        </div>
                    )
                    : (
                        <div className="pt-navbar-group pt-align-right">
                            <Link className="pt-button pt-intent-primary" to="/login">
                                Register/Log In
                            </Link>
                        </div>
                    )
                }
            </nav>
        );
    }
}

export default Header;
